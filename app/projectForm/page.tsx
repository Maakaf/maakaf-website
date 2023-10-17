'use client';

import { Arimo, Assistant } from 'next/font/google';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { Check, ChevronLeft } from 'lucide-react';

// https://github.com/shadcn-ui/ui/issues/690
import { asOptionalField, cn } from '@/lib/utils';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

const languages = [
  { label: 'English', value: 'en' },
  { label: 'French', value: 'fr' },
  { label: 'German', value: 'de' },
  { label: 'Spanish', value: 'es' },
  { label: 'Portuguese', value: 'pt' },
  { label: 'Russian', value: 'ru' },
  { label: 'Japanese', value: 'ja' },
  { label: 'Korean', value: 'ko' },
  { label: 'Chinese', value: 'zh' },
] as const;

const assistant = Assistant({
  subsets: ['latin', 'hebrew'],
  weight: ['400'],
});
const arimo = Arimo({
  subsets: ['hebrew'],
  weight: ['400', '500', '600'],
});



const formSchema = z.object({
  username: z.string().min(5, {
    message: 'שם המשתמש חייב להיות לפחות 5 תווים',
  }),
  email: z.string().email(),
  repoURL: asOptionalField(z.string().url()),
  language: asOptionalField(
    z.string({
      required_error: 'Please select a language.',
    })
  ),
  projectName: z.string().min(5, {
    message: 'שם הפרוייקט חייב להיות לפחות 5 תווים',
  }),
});

const ProjectForm = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      email: '',
      repoURL: '',
      language: '',
      projectName: '',
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    form.reset();
  }
  return (
    <div className="w-10/12 md:w-[600px] mx-auto mb-20">
      <h2 className="font-bold text-[#F8FAFC] text-2xl mb-4 md:mb-8">
        בקשה להוספת פרוייקט
      </h2>
      <p className={`${arimo.className} font-semibold tracking-[0.8px] mb-2`}>
        פרטים ליצירת קשר
      </p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={`flex flex-col md:grid md:grid-cols-2 gap-4 ${assistant.className}`}
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="שם מלא*" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="אימייל ליצירת קשר*" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="repoURL"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="קישור לריפו" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* בחירת שפת תכנות עיקרית */}
          <FormField
            control={form.control}
            name="language"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        role="combobox"
                        className={cn(
                          'dark:bg-gray-700 dark:text-slate-400 h-10 p-6 text-right',
                          !field.value && 'text-muted-foreground'
                        )}
                      >
                        {field.value
                          ? languages.find(
                              language => language.value === field.value
                            )?.label
                          : 'בחירת שפת תכנות עיקרית'}
                        <ChevronLeft className="mr-auto h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-[calc(100vw-40px)] md:w-[400px] p-0 font-normal">
                    <Command>
                      <CommandInput placeholder="בחר/י שפה" className="mr-2" />
                      <CommandEmpty>לא נמצאה שפה ברשימה</CommandEmpty>
                      <CommandGroup>
                        {languages.map(language => (
                          <CommandItem
                            value={language.label}
                            key={language.value}
                            onSelect={() => {
                              form.setValue('language', language.value);
                            }}
                            className="items-stretch"
                          >
                            <Check
                              className={cn(
                                'ml-2 h-4 w-4',
                                language.value === field.value
                                  ? 'opacity-100'
                                  : 'opacity-0'
                              )}
                            />
                            {language.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="projectName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="שם הפרוייקט*" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center justify-between gap-4 pr-4">
            <p className="flex-[1]">לוגו (אם יש)</p>
            <FormField
              control={form.control}
              name="projectName"
              render={({ field }) => (
                <FormItem className="flex-[2]">
                  <FormControl>
                    <Input placeholder="לוגו אם יש" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <p
            className={`${arimo.className} font-semibold tracking-[0.8px] my-8`}
          >
            תיאור פרויקט{' '}
          </p>
          <Button
            type="submit"
            className="col-span-2 bg-purple-400 h-12 justify-center"
          >
            שליחה
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ProjectForm;
