"use client";

import * as React from "react";
import { X } from "lucide-react";
import { Badge } from "@/Components/ui/badge";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/Components/ui/command";
import { Command as CommandPrimitive } from "cmdk";

interface MultiSelectProps {
  selected: string[]; // Array of selected categories (values)
  setSelected: (selected: string[]) => void; // Function to update the selected categories
  options: { value: string; label: string }[]; // Array of available options
}

export function MultiSelect({
  selected,
  setSelected,
  options,
}: MultiSelectProps) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");

  // Handle unselecting a category
  const handleUnselect = React.useCallback(
    (categoryValue: string) => {
      //@ts-ignore
      setSelected((prev: string[]) => prev.filter((s: string) => s !== categoryValue));
    },
    [setSelected]
  );

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      const input = inputRef.current;
      if (input) {
        if (e.key === "Delete" || e.key === "Backspace") {
          if (input.value === "") {
            //@ts-ignore
            setSelected((prev: any) => {
              const newSelected = [...prev];
              newSelected.pop();
              return newSelected;
            });
          }
        }
        // This is not a default behavior of the <input /> field
        if (e.key === "Escape") {
          input.blur();
        }
      }
    },
    [setSelected]
  );

  // Filter available options based on the selected categories
  const selectables = options.filter(
    (option) => !selected.includes(option.value)
  );

  return (
    <Command
      onKeyDown={handleKeyDown}
      className="overflow-visible bg-transparent max-h-[40px]"
    >
      <div className="group z-20 bg-background rounded-md border border-input px-3 py-1 text-sm ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
        <div className="overflow-y-scroll flex flex-wrap gap-1">
          {selected.map((value) => {
            const label = options.find((option) => option.value === value)?.label;
            return (
              <Badge key={value} variant="secondary">
                {label}
                <button
                  className="ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleUnselect(value);
                    }
                  }}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                  onClick={() => handleUnselect(value)}
                >
                  <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
                </button>
              </Badge>
            );
          })}
          <CommandPrimitive.Input
            ref={inputRef}
            value={inputValue}
            onValueChange={setInputValue}
            onBlur={() => setOpen(false)}
            onFocus={() => setOpen(true)}
            placeholder="Pilih kategori..."
            className="flex-1 text-sm max-h-[30px] bg-transparent outline-none border-none focus-within:ring-0 placeholder:text-muted-foreground"
          />
        </div>
      </div>

      <div className="relative mt-2">
        <CommandList>
          {open && selectables.length > 0 ? (
            <div className="absolute top-0 z-20 w-full rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in">
              <CommandGroup className="h-full overflow-auto">
                {selectables.map((option) => {
                  return (
                    <CommandItem
                      key={option.value}
                      onMouseDown={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                      }}
                      onSelect={() => {
                        setInputValue("");
                        //@ts-ignore
                        setSelected((prev: any) => [...prev, option.label]);
                      }}
                      className={"cursor-pointer"}
                    >
                      {option.label}
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            </div>
          ) : null}
        </CommandList>
      </div>
    </Command>
  );
}
