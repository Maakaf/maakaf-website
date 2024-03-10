'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { ChangeEvent, useTransition } from 'react';

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const localActive = useLocale();
  
  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    const newPath = pathname.replace(localActive, nextLocale);
    startTransition(() => {
      router.replace(newPath);
    });
  };
  return (
    <label className="border-2 rounded">
      <select
        className="bg-transparent"
        defaultValue={localActive}
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option value="he"> עברית </option>
        <option value="en"> English </option>
      </select>
    </label>
  );
}
