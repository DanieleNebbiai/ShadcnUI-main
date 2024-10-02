import { useState } from "react";
import { Button } from "./ui/ThemeButton";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/ThemeAvatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/ThemeCard";
import { Input } from "./ui/ThemeInput";
import { Label } from "./ui/ThemeLabel";
import { Calendar } from "./ui/ThemeCalendar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/ThemeDropdownMenu";
import { Badge } from "./ui/ThemeBadge";
import { RadioGroup, RadioGroupItem } from "./ui/ThemeRadio-group";
import { Switch } from "./ui/ThemeSwitch";
import { Bell, Plus } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Typography } from "../components/Typography";

const data = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 600 },
  { name: "Apr", value: 800 },
  { name: "May", value: 500 },
  { name: "Jun", value: 700 },
];

export function ShowcaseComponent() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="container mx-auto p-4 space-y-4 bg-background">
      <header className="flex justify-between items-center mb-8">
        <Typography variant="h1">Dashboard</Typography>
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="icon">
            <Bell className="h-4 w-4" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src="/placeholder.svg?height=32&width=32"
                    alt="@johndoe"
                  />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <Typography variant="p" className="font-medium">
                    John Doe
                  </Typography>
                  <Typography
                    variant="p"
                    className="text-xs text-muted-foreground"
                  >
                    john@example.com
                  </Typography>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col gap-4">
          <Card className="flex-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle>
                <Typography variant="h3" className="my-auto">
                  Total Revenue
                </Typography>
              </CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </CardHeader>
            <CardContent className="flex flex-col justify-center flex-1">
              <Typography variant="h3">$45,231.89</Typography>
              <Typography variant="p">+20.1% from last month</Typography>
            </CardContent>
          </Card>
          <Card className="flex-1">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <Avatar className="h-12 w-12">
                <AvatarImage
                  src="/placeholder.svg?height=48&width=48"
                  alt="Zoey Lang"
                />
                <AvatarFallback>ZL</AvatarFallback>
              </Avatar>
              <div className="flex flex-col my-auto">
                <Typography
                  variant="h3"
                  className="text-sm font-medium my-auto"
                >
                  Zoey Lang
                </Typography>
                <Typography
                  variant="p"
                  className="text-xs text-muted-foreground"
                >
                  @zoeylang
                </Typography>
              </div>
              <Button className="ml-auto" variant="secondary" size="sm">
                Follow
              </Button>
            </CardHeader>
            <CardContent className="flex flex-col justify-center flex-1">
              <Typography variant="p" className="mb-4">
                Full-stack developer, @getnextui lover she/her 🎉
              </Typography>
              <div className="flex gap-4 mb-2">
                <Typography variant="p">4 Following</Typography>
                <Typography variant="p">97.1K Followers</Typography>
              </div>
            </CardContent>
          </Card>
        </div>
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Cookie Settings</CardTitle>
            <CardDescription>Manage your cookie settings here.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="flex items-center justify-between space-x-2">
              <Label
                htmlFor="strictly-necessary"
                className="flex flex-col space-y-1"
              >
                <Typography variant="p" className="font-medium">
                  Strictly Necessary
                </Typography>
                <Typography
                  variant="p"
                  className="text-xs text-muted-foreground"
                >
                  These cookies are essential in order to use the website and
                  use its features.
                </Typography>
              </Label>
              <Switch id="strictly-necessary" defaultChecked={true} />
            </div>
            <div className="flex items-center justify-between space-x-2">
              <Label
                htmlFor="functional-cookies"
                className="flex flex-col space-y-1"
              >
                <Typography variant="p" className="font-medium">
                  Functional Cookies
                </Typography>
                <Typography
                  variant="p"
                  className="text-xs text-muted-foreground"
                >
                  These cookies allow the website to provide personalized
                  functionality.
                </Typography>
              </Label>
              <Switch id="functional-cookies" />
            </div>
            <div className="flex items-center justify-between space-x-2">
              <Label
                htmlFor="performance-cookies"
                className="flex flex-col space-y-1"
              >
                <Typography variant="p" className="font-medium">
                  Performance Cookies
                </Typography>
                <Typography
                  variant="p"
                  className="text-xs text-muted-foreground"
                >
                  These cookies help to improve the performance of the website.
                </Typography>
              </Label>
              <Switch id="performance-cookies" />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Save preferences</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Calendar</CardTitle>
            <CardDescription>Schedule your upcoming events.</CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md mx-auto"
            />
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="hsl(var(--secondary))"
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
            <CardDescription>You made 265 sales this month.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center">
                  <Avatar className="h-9 w-9">
                    <AvatarImage
                      src={`/placeholder.svg?height=36&width=36`}
                      alt="Avatar"
                    />
                    <AvatarFallback>OM</AvatarFallback>
                  </Avatar>
                  <div className="ml-4 space-y-1">
                    <Typography variant="p" className="font-medium">
                      Olivia Martin
                    </Typography>
                    <Typography
                      variant="p"
                      className="text-sm text-muted-foreground"
                    >
                      olivia.martin@email.com
                    </Typography>
                  </div>
                  <div className="ml-auto font-medium">+$1,999.00</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Create New Project</CardTitle>
            <CardDescription>
              Deploy your new project in one-click.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Name of your project" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="framework">Framework</Label>
                  <RadioGroup defaultValue="next">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="next" id="next" />
                      <Label htmlFor="next">Next.js</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="react" id="react" />
                      <Label htmlFor="react">React</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="vue" id="vue" />
                      <Label htmlFor="vue">Vue</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="ghost">Cancel</Button>
            <Button>Deploy</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Team Members</CardTitle>
            <CardDescription>
              Invite your team members to collaborate.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Alice", role: "Admin", variant: "default" },
                { name: "Bob", role: "Editor", variant: "secondary" },
                { name: "Charlie", role: "Deleted", variant: "destructive" },
              ].map(({ name, role, variant }, i) => (
                <div key={i} className="flex items-center">
                  <Avatar className="h-9 w-9">
                    <AvatarImage
                      src={`/placeholder.svg?height=36&width=36`}
                      alt={name}
                    />
                    <AvatarFallback>{name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="ml-4 space-y-1">
                    <Typography variant="p" className="font-medium">
                      {name}
                    </Typography>
                    <Typography
                      variant="p"
                      className="text-sm text-muted-foreground"
                    >
                      {name.toLowerCase()}@example.com
                    </Typography>
                  </div>
                  <Badge
                    variant={variant as "default" | "destructive" | "secondary"}
                    className="ml-auto"
                  >
                    {role}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">
              <Plus className="mr-2 h-4 w-4" /> Invite People
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
