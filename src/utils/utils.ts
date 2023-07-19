import { Console } from "console";

const formatToFeet = (val: string, cond: boolean): number => {
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

const wallCFT = (data: any[], height: number, thickness: number): number => {
  let length = 0;
  data.forEach((i: any) => {
    const inFeet = formatToFeet(i?.Length, false);
    length += inFeet;
  });
  return length * height * thickness;
};

const calculateBricks = (wallcft: number): number => wallcft * 13.5;

const dryMaterial = (totalcft: number): number => {
  const thirtyPercent = (30 / 100) * totalcft;
  return  thirtyPercent;
};

const calculateSandCft = (
  sandPortion: number,
  cementPortion: number,
  drymaterial: number
): number => {
  const totalPortion = sandPortion + cementPortion;
  return (sandPortion / totalPortion) * drymaterial;
};

const calculateCementBags = (
  sandPortion: number,
  cementPortion: number,
  drymaterial: number
): number => {
  const totalPortion = sandPortion + cementPortion;
  const cementCft = (cementPortion / totalPortion) * drymaterial;
  return cementCft / 1.25;
};

const calculateSandCft3 = (
  sandPortion: number,
  cementPortion: number,
  thirdPortion: number,
  drymaterial: number
): number => {
  const totalPortion = sandPortion + cementPortion + thirdPortion;
  return (sandPortion / totalPortion) * drymaterial;
};

const calculateCementBags3 = (
  sandPortion: number,
  cementPortion: number,
  thirdPortion: number,
  drymaterial: number
): number => {
  const totalPortion = sandPortion + cementPortion + thirdPortion;
  const cementCft = (cementPortion / totalPortion) * drymaterial;
  console.log(cementCft, "cementCft");
  return cementCft * 1.25;
};
const calculateBajarCft3 = (
  sandPortion: number,
  cementPortion: number,
  thirdPortion: number,
  drymaterial: number
): number => {
  const totalPortion = sandPortion + cementPortion + thirdPortion;
  console.log((thirdPortion / totalPortion) * drymaterial, "bajar Cft");

  return (thirdPortion / totalPortion) * drymaterial;
};

const foundationReader = (data: any[]): any => {
  const chars = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const charIndex = chars.indexOf(
    data
      .filter(
        (i) =>
          i?.Layer.includes("Height") &&
          i.Length != null &&
          i?.Layer.split(" ").length === 1
      )
      .sort((a, b) => {
        if (a?.Layer > b?.Layer) {
          return -1;
        } else if (a?.Layer < b?.Layer) {
          return 1;
        }
        return 0;
      })[0]
      ?.Layer.split("Height")[1]
  );

  const dataValues: any = {};
  data.forEach((i: any) => {
    for (let index = 0; index <= charIndex; index++) {
      if (
        (i.Layer === `Height${chars[index]}` && i.Length != null) ||
        (i.Layer === `Step${chars[index]}` && i.Length != null) ||
        (i.Layer === `Wall${chars[index]}` && i.Length != null) ||
        (i.Layer === `P.c.c${chars[index]}` && i.Length != null)
      ) {
        if (dataValues[chars[index]]) {
          dataValues[chars[index]].push(i);
        } else {
          dataValues[chars[index]] = [i];
        }
      }
    }
  });
  let totalStepCft: any = 0;
  let totalPccCft: any = 0;
  let totalWallCft: any = 0;
  Object.keys(dataValues).map((char) => {
    let stepWallLength = 0;
    let stepCft = 0;
    let pccCft = 0;
    let foundationWallCft = 0;
    let is3 = false;
    let is6 = false;
    dataValues[char].map((i: any) => {
      if (i?.Layer.includes("Wall"))
        stepWallLength += formatToFeet(i?.Length, false);
    });
    dataValues[char].map((i: any) => {
      if (i?.Layer.includes("Step") && i?.Length === "0'-6\"") is6 = true;
      if (i?.Layer.includes("Step") && i?.Length === "0'-3\"") is3 = true;
    });
    dataValues[char].map((i: any) => {
      if (
        i?.Layer.includes("Step") &&
        i?.Length !== "0'-6\"" &&
        i?.Length !== "0'-3\""
      ) {
        stepCft +=
          formatToFeet(i?.Length, false) *
          (is3 ? 0.25 : is6 ? 0.5 : 0) *
          stepWallLength;
      }
    });
    dataValues[char].map((i: any) => {
      if (i?.Layer.includes("P.c.c")) {
        pccCft += formatToFeet(i?.Length, false) * 0.5 * stepWallLength;
      }
    });
    dataValues[char].map((i: any) => {
      if (i?.Layer.includes("Height")) {
        foundationWallCft +=
          formatToFeet(i?.Length, false) * 0.75 * stepWallLength;
      }
    });
    is3 = false;
    is6 = false;

    console.log(stepCft, "Step", char);
    console.log(pccCft, "PCC", char);
    console.log(foundationWallCft, "Height", char);
    console.log("--------------------------");

    totalStepCft += stepCft;
    totalPccCft += pccCft;
    totalWallCft += foundationWallCft;

    console.log(totalStepCft, " step height");
    console.log(totalPccCft, "total pcc");
    console.log(totalWallCft, "totalWallCft");
    console.log("*********************");
  });
  const finalCft = totalStepCft + totalWallCft;
  const foundationDryQuantity = dryMaterial(finalCft);
  const bricks = calculateBricks(finalCft);
  const sand = calculateSandCft3(1, 4, 5, foundationDryQuantity);
  const cement = calculateCementBags3(1, 4, 5, foundationDryQuantity);
  const bajar = calculateBajarCft3(1, 4, 5, foundationDryQuantity);
    return {
      bricks,
      sand,
      cement,
      bajar
    };
};

const getTotal = (data: any[], title: string): number => {
  return Math.floor(data.filter((i) => i?.Layer.includes(title)).length / 2);
};

const doorWindowCFT = (data: any[], thickness: number): number => {
  let cft = 0;
  for (let i = 0; i < data.length; i += 2) {
    cft +=
      formatToFeet(data[i].Value, false) *
      formatToFeet(data[i + 1].Value, false) *
      thickness;
  }
  return cft;
};

const wallReader = (data: any[]): any => {
  const wall9Data: any[] = [];
  const wall4Data: any[] = [];
  const wallHeight: any[] = [];
  let wallFinalHeight: number = 0;
  data.forEach((i: any) => {
    if (i.Layer === "wall9") {
      wall9Data.push(i);
    } else if (i.Layer === "wall4") {
      wall4Data.push(i);
    } else if (i.Layer === "WallHeight") {
      wallHeight.push(i);
      wallHeight.forEach((j: any) => {
        wallFinalHeight = formatToFeet(j?.Length, false);
      });
    }
  });

  const wall4cft = wallCFT(wall4Data, wallFinalHeight, 0.38);
  const wall9cft = wallCFT(wall9Data, wallFinalHeight, 0.75);

  const total9doors = getTotal(data, "9D");
  const total4doors = getTotal(data, "4D");
  const total9Window = getTotal(data, "9W");
  const total4Window = getTotal(data, "4W");

  let door9Cft = 0;
  let door4Cft = 0;
  let window9Cft = 0;
  let window4Cft = 0;

  for (let i = 0; i < total4doors + total9doors; i++) {
    const doorData = data.filter((item: any) => {
      if (i < total9doors) {
        return item.Layer === `9D${i + 1}`;
      } else {
        return item.Layer === `4D${i + 1}`;
      }
    });

    if (i < total9doors) {
      door9Cft += doorWindowCFT(doorData, 0.75);
    } else {
      door4Cft += doorWindowCFT(doorData, 0.38);
    }
  }

  for (let i = 0; i < total4Window + total9Window; i++) {
    const windowData = data.filter((item: any) => {
      if (i < total9Window) {
        return item.Layer === `9W${i + 1}`;
      } else {
        return item.Layer === `4W${i + 1}`;
      }
    });

    if (i < total9Window) {
      window9Cft += doorWindowCFT(windowData, 0.75);
    } else {
      window4Cft += doorWindowCFT(windowData, 0.38);
    }
  }

  const finalCft =
    wall9cft - (door9Cft + window9Cft) + (wall4cft - (door4Cft + window4Cft));

  const dryQuantity = dryMaterial(finalCft);
  const bricks = calculateBricks(finalCft);
  const sand = calculateSandCft(4, 1, dryQuantity);
  const cement = calculateCementBags(4, 1, dryQuantity);
  console.log(finalCft,"final cft")
    return {
      bricks,
      sand,
      cement,
    };
};


const slabReader =(data: any[]): any => {
  console.log("system read the slab file");
  console.log(data, "data")
}

export { wallReader, foundationReader, slabReader };