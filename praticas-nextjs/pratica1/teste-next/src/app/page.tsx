"use client"

import { useTheme } from "next-themes";
import { Button } from "./_components/ui/button";
import { Card } from "./_components/ui/card";
import { Label } from "./_components/ui/label";
import { Switch } from "./_components/ui/switch";

export default function Home() {
  const { theme , setTheme } = useTheme()
  
  return (
    <>
      <h1 className="text-red-500 mb-5 bg">
        Home Page
      </h1>
      <Button>Teste</Button>
      <Card className="flex justify-center p-3">
        CARD
      </Card>
      <Switch 
      id="theming"
      onClick={()=> setTheme( theme === "light" ? "dark" : "light")}
      />
      <Label htmlFor="theming"> Toggle Theme </Label>

    </>
           
        
  );
}
