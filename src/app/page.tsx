"use client"

import BasePage from "@/components/BasePage/BasePage";
import Button from "@/components/Button/Button";
import Checkbox from "@/components/Checkbox/Checkbox";

const Home = () => {
  return (
    <BasePage>
      <Button>Normal button</Button>
      <Button disabled>Disabled button</Button>
      <Button><img src="/aspyre.svg" style={{width: 20}}></img>Normal image button</Button>
      <Button disabled><img src="/aspyre.svg" style={{width: 20}}></img>Disabled image button</Button>
      <Button onClick={() => {alert("Clicked!")}}>Callback test</Button>
      <br/>
      <br/>
      <div style={{display:"flex",flexFlow:"row",alignItems:"baseline",gap:"4px"}}>
        <Checkbox size="small" />
        <Checkbox size="medium" />
        <Checkbox size="large" />
      </div>
      <div style={{display:"flex",flexFlow:"row",alignItems:"baseline",gap:"4px"}}>
        <Checkbox size="small" disabled />
        <Checkbox size="medium" disabled />
        <Checkbox size="large" disabled />
      </div>
      <div style={{display:"flex",flexFlow:"row",alignItems:"baseline",gap:"4px"}}>
        <Checkbox size="small" checked disabled />
        <Checkbox size="medium" checked disabled />
        <Checkbox size="large" checked disabled />
      </div>
      <div style={{display:"flex",flexFlow:"row",alignItems:"baseline",gap:"4px"}}>
        <Checkbox size="small" accent="blue" checked />
        <Checkbox size="medium" accent="blue" checked />
        <Checkbox size="large" accent="blue" checked />
      </div>
      <div style={{display:"flex",flexFlow:"row",alignItems:"baseline",gap:"4px"}}>
        <Checkbox size="small" accent="purple" checked />
        <Checkbox size="medium" accent="purple" checked />
        <Checkbox size="large" accent="purple" checked />
      </div>
      <div style={{display:"flex",flexFlow:"row",alignItems:"baseline",gap:"4px"}}>
        <Checkbox size="small" accent="magenta" checked />
        <Checkbox size="medium" accent="magenta" checked />
        <Checkbox size="large" accent="magenta" checked />
      </div>
      <br/>
      <h3>Left labels</h3>
      <Checkbox size="large" checked label="left" labelPosition="left" />
      <Checkbox size="medium" checked label="left" labelPosition="left" />
      <Checkbox size="small" checked label="left" labelPosition="left" />
      <br/>
      <h3>Right labels</h3>
      <Checkbox size="large" checked label="right" labelPosition="right" />
      <Checkbox size="medium" checked label="right" labelPosition="right" />
      <Checkbox size="small" checked label="right" labelPosition="right" />
      <br/>
      <h3>Top labels</h3>
      <div style={{display:"flex",flexFlow:"row",alignItems:"baseline",gap:"8px"}}>
        <Checkbox size="large" checked label="top" labelPosition="top" />
        <Checkbox size="medium" checked label="top" labelPosition="top" />
        <Checkbox size="small" checked label="top" labelPosition="top" />
      </div>
      <br/>
      <h3>Bottom labels</h3>
      <div style={{display:"flex",flexFlow:"row",alignItems:"baseline",gap:"8px"}}>
        <Checkbox size="large" checked label="bottom" labelPosition="bottom" />
        <Checkbox size="medium" checked label="bottom" labelPosition="bottom" />
        <Checkbox size="small" checked label="bottom" labelPosition="bottom" />
      </div>
      <h3>Callback test</h3>
      <Checkbox onChange={(checked) => {alert(`changed to ${checked}!`)}} />
    </BasePage>
  );
}

export default Home;