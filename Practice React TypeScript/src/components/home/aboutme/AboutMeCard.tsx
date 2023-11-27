import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function AboutMeCard() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>About me</CardTitle>
        <CardDescription>My Bio</CardDescription>
      </CardHeader>
      <CardContent>
        <p>I am Varun</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <p>Github</p>
        <p>
          <i className="fa fa-linkedin" aria-hidden="true"></i>
          LinkedIn
        </p>
      </CardFooter>
    </Card>
  );
}

export default AboutMeCard;
