import { Console } from "console";

const formatToFeet = (val: any, cond: any) => {
  if (val) {
    const newVal = cond ? val.split(" ") : val.split("-");
    const feet: number = parseFloat(newVal[0].split("'")[0]);
    const inch_temp = newVal[1].split(" ");
    let inch: number = 0.0;
    if (inch_temp.length === 2) {
      const l = parseFloat(inch_temp[0]);
      const r = parseFloat(eval(inch_temp[1].split('"')[0]));
      inch = l + r;
      inch /= 12;
    } else {
      const n = parseFloat(eval(inch_temp[0].split('"')[0]));
      inch = n / 12;
    }

    return feet + inch;
  }
  return 0;
};

const wallCFT = (data: any, height: any, thickness: any) => {
  let length = 0;
  data?.map((i: any) => {
    const inFeet = formatToFeet(i?.Length, null);
    length += inFeet;
  });
  let cft = length * height * thickness;
  return cft;
};

const getTotal = (data: any[], title: string) => {
  let total = 0;
  data.map((i: any) => {
    if (i?.Layer.includes(title)) {
      total++;
    }
  });
  return Math.floor(total / 2);
};

const wallReader = (data: any) => {
  const wall9Data: any = [];
  const wall4Data: any = [];
  const wallHeight: any = [];
  let wallFinalHeight: any = "";
  data.map((i: any) => {
    if (i.Layer === "wall9") {
      wall9Data.push(i);
    }
    if (i.Layer === "wall4") {
      wall4Data.push(i);
    }
    if (i.Layer === "WallHeight") {
      wallHeight.push(i);
      wallHeight.map((j: any) => {
        wallFinalHeight = formatToFeet(j?.Length, null);
      });
    }
  });

  let wall4cft = wallCFT(wall4Data, wallFinalHeight, 0.38);
  let wall9cft = wallCFT(wall9Data, wallFinalHeight, 0.75);

  console.log(wall4cft, "debug4");
  console.log(wall9cft, "debug9");
  let windowData: any = [];
  data.map((i: any) => {
    if (i.Layer === "4W11") {
      windowData.push(i);
    }
  });
  const total9doors = getTotal(data, "9D");
  const total4doors = getTotal(data, "4D");
  for (let i = 1; i <= total4doors + total9doors; i++) {
    if (i <= total9doors) console.log(`9D${i}`);
    else console.log(`4D${i}`);
  }
};

export { wallReader };
