import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/ThemeAlert";
import { Calculator, Terminal, Laugh } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/ThemeAlertDialog";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/ThemeAvatar";
import { Badge } from "@/components/ui/ThemeBadge";
import { Button } from "@/components/ui/ThemeButton";
import { Calendar } from "@/components/ui/ThemeCalendar";
import { Checkbox } from "@/components/ui/ThemeCheckbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/ThemeCollapsible";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/ThemeCommand";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/ThemeContextMenu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/ThemeDialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/ThemeDropdownMenu";
// import {
//   HoverCard,
//   HoverCardContent,
//   HoverCardTrigger,
// } from "@/components/ui/ThemeHoverCard";
import { Input } from "@/components/ui/ThemeInput";
import { Label } from "@/components/ui/ThemeLabel";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/ThemeMenubar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/ThemeNavigationMenu";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/ThemePopover";
// import { Progress } from "@/components/ui/ThemeProgress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/ThemeRadio-group";
import { ScrollArea } from "@/components/ui/ThemeScrollArea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/ThemeSelect";
import { Separator } from "@/components/ui/ThemeSeparator";
// import { Slider } from "@/components/ui/ThemeSlider";
import { Switch } from "@/components/ui/ThemeSwitch";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHeader,
  TableHead,
  TableRow,
} from "@/components/ui/ThemeTable";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/ThemeTabs";
import { Textarea } from "@/components/ui/ThemeTextarea";
import { Toggle } from "@/components/ui/ThemeToggle";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipTrigger,
//   TooltipProvider,
// } from "@/components/ui/ThemeTooltip";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/ThemeAccordion";
import { Image } from "./ui/ThemeImage";

export const AccordionComponent = () => (
  <Accordion type="single" collapsible className="w-96 text-left">
    <AccordionItem value="item-1">
      <AccordionTrigger>Is it accessible?</AccordionTrigger>
      <AccordionContent>
        Yes. It adheres to the WAI-ARIA design pattern.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>Is it styled?</AccordionTrigger>
      <AccordionContent>
        Yes. It comes with default styles that matches the other components'
        aesthetic.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger>Is it animated?</AccordionTrigger>
      <AccordionContent>
        Yes. It's animated by default, but you can disable it if you prefer.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-4">
      <AccordionTrigger>Can it be nested?</AccordionTrigger>
      <AccordionContent>
        Yes. You can nest accordion components to create multi-level expandable
        sections.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

export const AlertComponent = () => (
  <Alert className="text-left">
    <Terminal className="h-4 w-4" />
    <AlertTitle>Heads up!</AlertTitle>
    <AlertDescription>
      You can add components to your app using the cli.
    </AlertDescription>
  </Alert>
);

export const AlertDialogComponent = () => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button variant="outline">Show Dialog</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction>Continue</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

export const ImageComponent = () => (
  <Image
    src="https://picsum.photos/1000/1000"
    alt="Photo by Drew Beamer"
    className="rounded-md w-1/4"
  />
);

export const AvatarComponent = () => (
  <Avatar>
    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="@shadcn" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
);

export const BadgeComponent = () => (
  <div className="space-x-2 space-y-2">
    <Badge>Default</Badge>
    <Badge variant="secondary">Secondary</Badge>
    <Badge variant="outline">Outline</Badge>
    <Badge variant="destructive">Destructive</Badge>
  </div>
);

export const ButtonComponent = () => (
  <div className="space-x-2 space-y-2">
    <Button>Default</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="destructive">Destructive</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="ghost"> Ghost</Button>
    <Button variant="link">Link</Button>
  </div>
);

export const CalendarComponent = () => (
  <Calendar mode="single" className="rounded-md border" />
);

export const CheckboxComponent = () => (
  <div className="flex items-center space-x-2">
    <Checkbox id="terms" />
    <label
      htmlFor="terms"
      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      Accept terms and conditions
    </label>
  </div>
);

export const CollapsibleComponent = () => (
  <Collapsible className="w-96 text-left">
    <CollapsibleTrigger className="font-bold">
      <Button variant="default"> Friend List</Button>
    </CollapsibleTrigger>
    <p className="my-4 text-sm text-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
      Yes. Free to add friend to your friend list{" "}
    </p>
    <CollapsibleContent>
      <p className="my-4 text-sm text-foreground/60">Type friend name</p>
      <Label>
        <Input type="text" placeholder="Jane Doe" />
      </Label>
    </CollapsibleContent>
  </Collapsible>
);

export const CommandComponent = () => (
  <Command className="text-left w-96 text-foreground border-border border-2">
    <CommandInput placeholder="Type a command or search..." />
    <CommandList>
      <CommandEmpty>No results found.</CommandEmpty>
      <CommandGroup heading="Suggestions">
        <CommandItem>{<Terminal />} &nbsp; Calendar</CommandItem>
        <CommandItem>{<Laugh />} &nbsp; Search Emoji</CommandItem>
        <CommandItem>{<Calculator />} &nbsp; Calculator</CommandItem>
      </CommandGroup>
    </CommandList>
  </Command>
);

export const ContextMenuComponent = () => (
  <ContextMenu>
    <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
      Right click here
    </ContextMenuTrigger>
    <ContextMenuContent>
      <ContextMenuItem>Profile</ContextMenuItem>
      <ContextMenuItem>Billing</ContextMenuItem>
      <ContextMenuItem>Team</ContextMenuItem>
      <ContextMenuItem>Subscription</ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
);

export const DialogComponent = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline">Edit Profile</Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Edit profile</DialogTitle>
        <DialogDescription>
          Make changes to your profile here. Click save when you're done.
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Name
          </Label>
          <Input id="name" value="Pedro Duarte" className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="username" className="text-right">
            Username
          </Label>
          <Input id="username" value="@peduarte" className="col-span-3" />
        </div>
      </div>
      <DialogFooter>
        <Button type="submit">Save changes</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

export const DropdownMenuComponent = () => (
  <DropdownMenu>
    <DropdownMenuTrigger>
      <Button variant="outline">Open</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Profile</DropdownMenuItem>
      <DropdownMenuItem>Billing</DropdownMenuItem>
      <DropdownMenuItem>Team</DropdownMenuItem>
      <DropdownMenuItem>Subscription</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

// export const HoverCardComponent = () => (
//   <HoverCard>
//     <HoverCardTrigger asChild>
//       <Button variant="link">@nextjs</Button>
//     </HoverCardTrigger>
//     <HoverCardContent className="w-80">
//       <div className="flex justify-between space-x-4">
//         <Avatar>
//           <AvatarImage src="https://github.com/vercel.png" />
//           <AvatarFallback>VC</AvatarFallback>
//         </Avatar>
//         <div className="space-y-1">
//           <h4 className="text-sm font-semibold">@nextjs</h4>
//           <p className="text-sm">
//             The React Framework - created and maintained by @vercel.
//           </p>
//           <div className="flex items-center pt-2">
//             <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
//             <span className="text-xs text-muted-foreground">
//               Joined December 2021
//             </span>
//           </div>
//         </div>
//       </div>
//     </HoverCardContent>
//   </HoverCard>
// );

export const InputComponent = () => (
  <div className="flex flex-col space-y-4 text-left">
    <Input type="name" placeholder="Name" />
    <Input type="surname" placeholder="Surneame" />
    <Input type="email" placeholder="Email" />
  </div>
);

export const LabelComponent = () => (
  <div className="flex flex-col space-y-4 text-left">
    <Label htmlFor="email">Your email address</Label>
    <Input id="email" type="email" placeholder="Email" />
  </div>
);

export const MenubarComponent = () => (
  <Menubar>
    <MenubarMenu>
      <MenubarTrigger>File</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>
          New Tab <MenubarShortcut>⌘T</MenubarShortcut>
        </MenubarItem>
        <MenubarItem>New Window</MenubarItem>
        <MenubarSeparator />
        <MenubarItem>Share</MenubarItem>
        <MenubarSeparator />
        <MenubarItem>Print</MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  </Menubar>
);

export const NavigationMenuComponent = () => (
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Destinations</NavigationMenuTrigger>
        <NavigationMenuContent>
          <NavigationMenuLink>
            <ul className="grid gap-3 p-4 w-64 text-left">
              {[
                {
                  title: "Beach Getaways",
                  description: "Relax on the world's most beautiful beaches",
                },
                {
                  title: "Mountain Retreats",
                  description:
                    "Escape to the mountains for adventure and serenity",
                },
                {
                  title: "City Breaks",
                  description:
                    "Explore vibrant cities and their cultural attractions",
                },
                {
                  title: "Wildlife Encounters",
                  description: "Get up close with nature's wonders",
                },
              ].map((item) => (
                <li key={item.title} className="relative">
                  <NavigationMenuLink asChild>
                    <a
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      href={`/${item.title.toLowerCase().replace(/ /g, "-")}`}
                    >
                      <div className="text-sm font-medium leading-none">
                        {item.title}
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug">
                        {item.description}
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Activities</NavigationMenuTrigger>
        <NavigationMenuContent>
          <NavigationMenuLink>
            <ul className="grid gap-3 p-4 w-64 text-left">
              {[
                {
                  title: "Water Sports",
                  description:
                    "Dive into the world of surfing, kayaking, and more",
                },
                {
                  title: "Hiking and Camping",
                  description:
                    "Explore nature's trails and sleep under the stars",
                },
                {
                  title: "Food and Wine",
                  description: "Indulge in local cuisine and wine tastings",
                },
                {
                  title: "Cultural Experiences",
                  description:
                    "Immerse yourself in local traditions and customs",
                },
              ].map((item) => (
                <li key={item.title} className="relative">
                  <NavigationMenuLink asChild>
                    <a
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      href={`/${item.title.toLowerCase().replace(/ /g, "-")}`}
                    >
                      <div className="text-sm font-medium leading-none">
                        {item.title}
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {item.description}
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
);

// export const PopoverComponent = () => (
//   <Popover>
//     <PopoverTrigger asChild>
//       <Button variant="outline">Open popover</Button>
//     </PopoverTrigger>
//     <PopoverContent>Place content for the popover here.</PopoverContent>
//   </Popover>
// );

// export const ProgressComponent = () => <Progress value={33} />;

export const RadioGroupComponent = () => (
  <RadioGroup defaultValue="option-one">
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="option-one" id="option-one" />
      <Label htmlFor="option-one">Option One</Label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="option-two" id="option-two" />
      <Label htmlFor="option-two">Option Two</Label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="option-three" id="option-three" />
      <Label htmlFor="option-three">Option Three</Label>
    </div>
  </RadioGroup>
);

export const ScrollAreaComponent = () => (
  <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
    Jokester began sneaking into the castle in the middle of the night and
    leaving jokes all over the place: under the king's pillow, in his soup, even
    in the royal toilet. The king was furious, but he couldn't seem to stop
    Jokester, no matter what he tried. Night after night, Jokester's antics
    continued, with riddles appearing on the throne and puns plastered on the
    castle walls. The royal court was in stitches, but the king's rage only
    grew. He hired guards, set traps, and even tried to stay awake all night,
    but Jokester always found a way to slip through and leave a trail of
    laughter in their wake. The kingdom was abuzz with tales of the mysterious
    prankster, and soon, people from far and wide came to witness the comedic
    chaos. Jokester's fame grew, much to the king's chagrin. In desperation, the
    king announced a grand reward for Jokester's capture, but this only seemed
    to inspire more elaborate and daring jokes. Courtiers found their wigs
    replaced with jester hats, the royal horses sported clown noses, and even
    the king's crown was once found balancing atop a towering house of cards. As
    the laughter echoed through the kingdom, the king began to wonder if perhaps
    he should learn to embrace the humor rather than fight it.
  </ScrollArea>
);

export const SelectComponent = () => (
  <Select>
    <SelectTrigger>
      <SelectValue />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="light">Light</SelectItem>
      <SelectItem value="dark">Dark</SelectItem>
      <SelectItem value="system">System</SelectItem>
    </SelectContent>
  </Select>
);

export const SeparatorComponent = () => (
  <>
    <div className="space-y-1 text-left">
      <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
      <p className="text-sm text-muted-foreground">
        An open-source UI component library.
      </p>
    </div>
    <Separator className="my-4" />
    <div className="flex h-5 items-center space-x-4 text-sm">
      <div>Blog</div>
      <Separator orientation="vertical" />
      <div>Docs</div>
      <Separator orientation="vertical" />
      <div>Source</div>
    </div>
  </>
);

// export const SliderComponent = () => (
//   <Slider defaultValue={[33]} max={100} step={1} className="" />
// );

export const SwitchComponent = () => (
  <div className="flex items-center space-x-2">
    <Switch id="airplane-mode" />
    <Label htmlFor="airplane-mode">Airplane Mode</Label>
  </div>
);

export const TableComponent = () => (
  <Table>
    <TableCaption>A list of your recent invoices.</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead className="w-[100px]">Invoice</TableHead>
        <TableHead>Status</TableHead>
        <TableHead>Method</TableHead>
        <TableHead className="text-right">Amount</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell className="font-medium">INV001</TableCell>
        <TableCell>Paid</TableCell>
        <TableCell>Credit Card</TableCell>
        <TableCell className="text-right">$250.00</TableCell>
      </TableRow>
      <TableRow>
        <TableCell className="font-medium">INV002</TableCell>
        <TableCell>Pending</TableCell>
        <TableCell>Paypal</TableCell>
        <TableCell className="text-right">$150.00</TableCell>
      </TableRow>
      <TableRow>
        <TableCell className="font-medium">INV003</TableCell>
        <TableCell>Pending</TableCell>
        <TableCell>Paypal</TableCell>
        <TableCell className="text-right">$150.00</TableCell>
      </TableRow>
    </TableBody>
  </Table>
);

export const TabsComponent = () => (
  <Tabs defaultValue="account" className="w-[400px]">
    <TabsList>
      <TabsTrigger value="account">Account</TabsTrigger>
      <TabsTrigger value="password">Password</TabsTrigger>
    </TabsList>
    <TabsContent value="account">
      Make changes to your account here.
    </TabsContent>
    <TabsContent value="password">Change your password here.</TabsContent>
  </Tabs>
);

export const TextareaComponent = () => (
  <Textarea placeholder="Type your message here." />
);

export const ToggleComponent = () => (
  <Toggle aria-label="Toggle italic">
    <span className="italic">Italic</span>
  </Toggle>
);

// export const TooltipComponent = () => (
//   <TooltipProvider>
//     <Tooltip>
//       <TooltipTrigger asChild>
//         <Button variant="outline">Hover</Button>
//       </TooltipTrigger>
//       <TooltipContent>
//         <p>Add to library</p>
//       </TooltipContent>
//     </Tooltip>
//   </TooltipProvider>
// );
