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
  return totalcft + thirtyPercent;
};

const calculateSandCft = (
  sandportion: number,
  cementportion: number,
  drymaterial: number
): number => {
  const totalportion = sandportion + cementportion;
  return (sandportion / totalportion) * drymaterial;
};

const calculateCementBags = (
  sandportion: number,
  cementportion: number,
  drymaterial: number
): number => {
  const totalportion = sandportion + cementportion;
  const cementCft = (cementportion / totalportion) * drymaterial;
  return cementCft * 1.25;
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
  let section: any[] = [];
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
  Object.keys(dataValues).map((char) => {
    let totalWall = 0;
    let totalStepHeight = 0;
    let totalPcc = 0;
    let totalHeight = 0;
    let is3 = false;
    let is6 = false;
    dataValues[char].map((i: any) => {
      if (i?.Layer.includes("Wall"))
        totalWall += formatToFeet(i?.Length, false);
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
        totalStepHeight +=
          formatToFeet(i?.Length, false) *
          (is3 ? 0.25 : is6 ? 0.5 : 0) *
          totalWall;
      }
    });
    dataValues[char].map((i: any) => {
      if (i?.Layer.includes("P.c.c")) {
        totalPcc += formatToFeet(i?.Length, false) * 0.5 * totalWall;
      }
    });
    dataValues[char].map((i: any) => {
      if (i?.Layer.includes("Height")) {
        totalHeight += formatToFeet(i?.Length, false) * 0.75 * totalWall;
      }
    });
    is3 = false;
    is6 = false;
    console.log(totalWall, "Wall", char);
    console.log(totalStepHeight, "Step", char);
    console.log(totalPcc, "PCC", char);
    console.log(totalHeight, "Height", char);
  });
  section = Object.keys(dataValues);
  // for (let i = 0; i <= charIndex; i++) {
  //   section.map((index: any) => {
  //     if (index === chars[i]) {
  //       let len: any = 0;
  //       let height: any = 0;
  //       let stepHeight: any = 1;
  //       let sqft: any = 0;
  //       dataValues[index].map((item: any) => {
  //         if (item?.Layer === `Wall${index}`) {
  //           const infeet = formatToFeet(item?.Length, false);
  //           len += infeet;
  //         }
  //         if (item?.Layer === `Height${index}`) {
  //           height = formatToFeet(item?.Length, false);
  //         }
  //         if(item?.Layer === `Step${index}` && item.Length === "0'-3\""){
  //           stepHeight = 0.25;
  //         }
  //         if(item?.Layer === `Step${index}` && item.Length === "0'-6\""){
  //           stepHeight = 0.5;
  //         }
  //         if (
  //           item?.Layer === `Step${index}` &&
  //           item.Length != "0'-3\"" &&
  //           item.Length != "0'-6\""
  //         ) {
  //           sqft=stepHeight*formatToFeet(item?.Length, false);
  //         }
  //       });
  //       console.log(len, `length${index}`)
  //     }
  //   });
  // }
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
  const sand = calculateSandCft(1, 4, dryQuantity);
  const cement = calculateCementBags(1, 4, dryQuantity);

  return {
    bricks,
    sand,
    cement,
  };
};

export { wallReader, foundationReader };
