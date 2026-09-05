'use client';
import { useId } from 'react';
import Select from 'react-select';
type OptionTypes = {
    options: {
        value: string,
        label: string
    }[],
    isMulti?: boolean,
    onChange?: () => void;
}
export default function CustomSelect({ options, isMulti = false }: OptionTypes) {
    const instanceId = useId();
    return <Select
        isMulti={isMulti}
        options={options}
        isSearchable
        instanceId={instanceId}
        placeholder="Select assignees..."
        unstyled
        classNames={{
            control: ({ isFocused }) =>
                `w-full min-h-[42px] px-3 py-1.5 bg-slate-950 border rounded-lg text-sm transition-colors cursor-pointer flex items-center flex-wrap gap-1 ${isFocused ? 'border-slate-600 ring-1 ring-slate-600' : 'border-slate-800'
                }`,
            menu: () =>
                'mt-1 bg-slate-900 border border-slate-800 rounded-lg shadow-xl overflow-hidden text-sm z-50',
            menuList: () => 'p-1 space-y-0.5 max-h-60 overflow-y-auto',
            option: ({ isFocused, isSelected }) =>
                `px-3 py-2 rounded-md transition-colors cursor-pointer text-sm ${isSelected
                    ? 'bg-slate-800 text-slate-100 font-medium'
                    : isFocused
                        ? 'bg-slate-800/60 text-slate-200'
                        : 'text-slate-300 hover:bg-slate-800/40'
                }`,
            multiValue: () =>
                'bg-slate-800 border border-slate-700/60 text-slate-200 rounded-md px-2 py-0.5 flex items-center gap-1 text-xs font-medium',
            multiValueLabel: () => 'text-slate-200',
            multiValueRemove: () =>
                'text-slate-400 hover:text-slate-100 hover:bg-slate-700/60 rounded p-0.5 transition-colors cursor-pointer',
            placeholder: () => 'text-slate-600 text-sm',
            input: () => 'text-slate-100 text-sm m-0 p-0',
            singleValue: () => 'text-slate-100 text-sm',
            valueContainer: () => 'gap-1',
            clearIndicator: () => 'text-slate-400 hover:text-slate-200 p-1 cursor-pointer',
            dropdownIndicator: () => 'text-slate-400 hover:text-slate-200 p-1 cursor-pointer',
        }}
    />
}