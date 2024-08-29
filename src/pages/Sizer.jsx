import classNames from "classnames";
import {
  Avatar,
  Button,
  Card,
  Label,
  Select,
  Tabs,
  TextInput,
} from "flowbite-react";
import { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { TabTheme } from "../../Theme/TabTheme";
import MobileImage from "./mobile.png";
import SampleImage from "./sample.png";

export function Sizer() {
  const [hoveringAt, setHoveringAt] = useState(null);
  const [rangeValue, setRangeValue] = useState(100);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/size.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="overflow-x-auto p-6">
      <Tabs
        aria-label="Full width tabs flex-1"
        variant="pills"
        theme={TabTheme}
        className="flex-1 justify-end"
      >
        <Tabs.Item icon={FaHome}>
          <Card className="h-2/4">
            <div className="grid grid-cols-3 gap-2">
              <div className="flex-1 flex justify-center flex-col items-start">
                <p className="m-2 font-semibold">Stylist</p>
                <Avatar
                  className="w-16 h-16 m-2"
                  img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  alt="avatar of Jese"
                  rounded
                  size={"25px"}
                />
                <Avatar
                  className="w-16 h-16 m-2"
                  img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  alt="avatar of Jese"
                  rounded
                  size={"25px"}
                />

                <Avatar
                  className="w-16 h-16 m-2"
                  img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  alt="avatar of Jese"
                  rounded
                  size={"25px"}
                />
                <Avatar
                  className="w-16 h-16 m-2"
                  img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  alt="avatar of Jese"
                  rounded
                  size={"25px"}
                />

                <span className="inline-flex items-center justify-center w-16 h-16 m-2 rounded-full bg-gray-200 text-center ">
                  see all
                </span>
              </div>
              <div>
                <div className="flex text-2xl font-semibold justify-center">
                  <h3>You&apos;ll never buy wrong size again.</h3>
                </div>
                <p className="text-xl mt-4">
                  Sizible remembers your measurements and used AI to <br />{" "}
                  <span className="flex justify-center">
                    {" "}
                    match the correct garments
                  </span>
                </p>
                <img
                  src={MobileImage}
                  alt="mobile"
                  className="w-[31rem] h-96"
                />

                {/* <Button className="mt-4 flex justify-center" size={"lg"}>
                  {" "}
                  <span className="text-2xl font-serif">
                    Try it <br />
                    for Size
                  </span>{" "}
                  <HiClipboardList size="55px" className="ml-2" />
                </Button> */}
              </div>
              <div className="mx-auto w-96 flex flex-col justify-center">
                <div className="flex text-2xl font-semibold justify-center">
                  <h3>Log in / Sign in</h3>
                </div>
                <div className=" mt-8">
                  {" "}
                  <div>
                    <TextInput
                      id="email1"
                      type="email"
                      placeholder="Enter your email address"
                      required
                      sizing={"lg"}
                    />
                  </div>{" "}
                  <div className="mt-6">
                    <TextInput
                      id="email1"
                      type="email"
                      sizing={"lg"}
                      placeholder="Enter your password"
                      required
                    />
                  </div>{" "}
                  <div className="mt-8 flex justify-between items-center">
                    <div>forget password?</div>
                    <div>
                      <Button size={"lg"} gradientDuoTone="purpleToPink">
                        Login
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </Tabs.Item>

        <Tabs.Item title="Sizer">
          <Card className="h-2/4">
            <div className="flex justify-center ml-24">
              <h2 className="font-bold text-2xl">Set your perfect fit</h2>
            </div>
            <div className="grid grid-cols-4 gap-4">
              <div className="flex-1 flex justify-center flex-col items-start">
                <p className="m-2 font-semibold">Stylist</p>
                <Avatar
                  className="w-16 h-16 m-2"
                  img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  alt="avatar of Jese"
                  rounded
                  size={"25px"}
                />
                <Avatar
                  className="w-16 h-16 m-2"
                  img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  alt="avatar of Jese"
                  rounded
                  size={"25px"}
                />

                <Avatar
                  className="w-16 h-16 m-2"
                  img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  alt="avatar of Jese"
                  rounded
                  size={"25px"}
                />
                <Avatar
                  className="w-16 h-16 m-2"
                  img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  alt="avatar of Jese"
                  rounded
                  size={"25px"}
                />

                <span className="inline-flex items-center justify-center w-16 h-16 m-2 rounded-full bg-gray-200 text-center ">
                  see all
                </span>
              </div>
              <div>
                <div
                  className={classNames({
                    "w-32 p-1  hover:bg-red-200 ": true,
                    "bg-red-200": hoveringAt === "neck",
                  })}
                  onMouseEnter={() => {
                    setHoveringAt("neck");
                  }}
                  onMouseLeave={() => {
                    setHoveringAt(null);
                  }}
                >
                  <div className="mb-2">
                    <Label htmlFor="neck" value="Neck" className="" />
                  </div>
                  <Select id="neck" required>
                    {/* {data.map((item) => (
                      <option key={item?.id} value={item?.size}>
                        {item?.size}
                      </option>
                    ))} */}
                    <option value="">{"Select size"}</option>
                    {data?.map((item) => (
                      <option key={item._id} value={item._id}>
                        {item.size}
                      </option>
                    ))}
                  </Select>{" "}
                </div>
                <div
                  className={classNames({
                    "w-32 p-1 mt-2  hover:bg-red-200 ": true,
                    "bg-red-200": hoveringAt === "shoulder",
                  })}
                  onMouseEnter={() => {
                    setHoveringAt("shoulder");
                  }}
                  onMouseLeave={() => {
                    setHoveringAt(null);
                  }}
                >
                  <div className="mb-2 sm">
                    <Label htmlFor="shoulder" value="Shoulder" />
                  </div>
                  <Select id="shoulder" required>
                    <option value="">{"Select size"}</option>
                    {data?.map((item) => (
                      <option key={item._id} value={item._id}>
                        {item.size}
                      </option>
                    ))}
                  </Select>{" "}
                </div>
                <div
                  className={classNames({
                    "w-32 p-1 mt-4  hover:bg-red-200 ": true,
                    "bg-red-200": hoveringAt === "arms",
                  })}
                  onMouseEnter={() => {
                    setHoveringAt("arms");
                  }}
                  onMouseLeave={() => {
                    setHoveringAt(null);
                  }}
                >
                  <div className="mb-2 sm">
                    <Label htmlFor="arms" value="Arms" />
                  </div>
                  <Select id="arms" required>
                    <option value="">{"Select size"}</option>
                    {data?.map((item) => (
                      <option key={item._id} value={item._id}>
                        {item.size}
                      </option>
                    ))}
                  </Select>{" "}
                </div>
                <div
                  className={classNames({
                    "w-32 p-1 mt-2  hover:bg-red-200 ": true,
                    "bg-red-200": hoveringAt === "leg",
                  })}
                  onMouseEnter={() => {
                    setHoveringAt("leg");
                  }}
                  onMouseLeave={() => {
                    setHoveringAt(null);
                  }}
                >
                  <div className="mb-2 sm">
                    <Label htmlFor="leg" value="Leg" />
                  </div>
                  <Select id="leg" required>
                    <option value="">{"Select size"}</option>
                    {data?.map((item) => (
                      <option key={item._id} value={item._id}>
                        {item.size}
                      </option>
                    ))}
                  </Select>{" "}
                </div>
              </div>
              <div>
                <div className="w-36 flex justify-center items-center relative h-[500px]">
                  <div
                    id="neck"
                    onMouseEnter={() => {
                      setHoveringAt("neck");
                    }}
                    onMouseLeave={() => {
                      setHoveringAt(null);
                    }}
                    className={classNames({
                      " hover:bg-neutral-100 h-4 items-center  flex justify-between  w-[27px] absolute top-[92px]": true,
                      "bg-neutral-100": hoveringAt === "neck",
                    })}
                  >
                    <span className="h-[5px] rounded-full absolute  bg-pink-500 w-[2px]"></span>
                    <span className="h-[2px] border-[1px] flex-1 border-dashed border-pink-500"></span>

                    <span className="h-[5px] rounded-full absolute right-0  bg-pink-500 w-[2px]"></span>
                  </div>
                  <div
                    id="shoulder"
                    onMouseEnter={() => {
                      setHoveringAt("shoulder");
                    }}
                    onMouseLeave={() => {
                      setHoveringAt(null);
                    }}
                    className={classNames({
                      " hover:bg-neutral-100 h-4 items-center  flex justify-between  w-[82px] absolute top-[108px]": true,
                      "bg-neutral-100": hoveringAt === "shoulder",
                    })}
                  >
                    <span className="h-[5px] rounded-full absolute  bg-pink-500 w-[2px]"></span>
                    <span className="h-[2px] border-[1px] flex-1 border-dashed border-pink-500"></span>

                    <span className="h-[5px] rounded-full absolute right-0  bg-pink-500 w-[2px]"></span>
                  </div>
                  <div
                    id="chest"
                    onMouseEnter={() => {
                      setHoveringAt("chest");
                    }}
                    onMouseLeave={() => {
                      setHoveringAt(null);
                    }}
                    className={classNames({
                      " hover:bg-neutral-100 h-4 items-center  flex justify-between  w-[60px] absolute top-[165px]": true,
                      "bg-neutral-100": hoveringAt === "chest",
                    })}
                  >
                    <span className="h-[5px] rounded-full absolute  bg-pink-500 w-[2px]"></span>
                    <span className="h-[2px] border-[1px] flex-1 border-dashed border-pink-500"></span>

                    <span className="h-[5px] rounded-full absolute right-0  bg-pink-500 w-[2px]"></span>
                  </div>
                  <div
                    id="hip"
                    onMouseEnter={() => {
                      setHoveringAt("hip");
                    }}
                    onMouseLeave={() => {
                      setHoveringAt(null);
                    }}
                    className={classNames({
                      " hover:bg-neutral-100 h-4 items-center  flex justify-between  w-[82px] absolute top-[250px]": true,
                      "bg-neutral-100": hoveringAt === "hip",
                    })}
                  >
                    <span className="h-[5px] rounded-full absolute  bg-pink-500 w-[2px]"></span>
                    <span className="h-[2px] border-[1px] flex-1 border-dashed border-pink-500"></span>

                    <span className="h-[5px] rounded-full absolute right-0  bg-pink-500 w-[2px]"></span>
                  </div>
                  <div
                    id="waist"
                    onMouseEnter={() => {
                      setHoveringAt("waist");
                    }}
                    onMouseLeave={() => {
                      setHoveringAt(null);
                    }}
                    className={classNames({
                      "hover:bg-neutral-100 h-4 items-center  flex justify-between  w-[69px] absolute top-[225px]": true,
                      "bg-neutral-100": hoveringAt === "waist",
                    })}
                  >
                    <span className="h-[5px] rounded-full absolute  bg-pink-500 w-[2px]"></span>
                    <span className="h-[2px] border-[1px] flex-1 border-dashed border-pink-500"></span>

                    <span className="h-[5px] rounded-full absolute right-0  bg-pink-500 w-[2px]"></span>
                  </div>
                  <div
                    id="arms"
                    onMouseEnter={() => {
                      setHoveringAt("arms");
                    }}
                    onMouseLeave={() => {
                      setHoveringAt(null);
                    }}
                    className={classNames({
                      "hover:bg-neutral-100 w-4 items-center flex flex-col justify-between h-[94px] absolute top-[126px] right-[11px] transform rotate-[-11deg]": true,
                      "bg-neutral-100": hoveringAt === "arms",
                    })}
                  >
                    <span className="w-[5px] rounded-full bg-pink-500 h-[2px]"></span>
                    <span className="w-[2px] border-[1px] flex-1 border-dashed border-pink-500"></span>
                    <span className="w-[5px] rounded-full bg-pink-500 h-[2px]"></span>
                  </div>
                  <div
                    id="arms"
                    onMouseEnter={() => {
                      setHoveringAt("arms");
                    }}
                    onMouseLeave={() => {
                      setHoveringAt(null);
                    }}
                    className={classNames({
                      "hover:bg-neutral-100 w-4 flex flex-col  items-center justify-between h-[94px] absolute top-[126px] left-[27px] transform rotate-[11deg]": true,
                      "bg-neutral-100": hoveringAt === "arms",
                    })}
                  >
                    <span className="w-[5px] rounded-full bg-pink-500 h-[2px]"></span>
                    <span className="w-[2px] border-[1px] flex-1 border-dashed border-pink-500"></span>
                    <span className="w-[5px] rounded-full bg-pink-500 h-[2px]"></span>
                  </div>
                  <div
                    id="leg"
                    onMouseEnter={() => {
                      setHoveringAt("leg");
                    }}
                    onMouseLeave={() => {
                      setHoveringAt(null);
                    }}
                    className={classNames({
                      "hover:bg-neutral-100 w-4 flex flex-col items-center justify-between h-[144px] absolute top-[265px] right-[42px] ": true,
                      "bg-neutral-100": hoveringAt === "leg",
                    })}
                  >
                    <span className="w-[5px] rounded-full bg-pink-500 h-[2px]"></span>
                    <span className="w-[2px] border-[1px] flex-1 border-dashed border-pink-500"></span>
                    <span className="w-[5px] rounded-full bg-pink-500 h-[2px]"></span>
                  </div>
                  <div
                    id="leg"
                    onMouseEnter={() => {
                      setHoveringAt("leg");
                    }}
                    onMouseLeave={() => {
                      setHoveringAt(null);
                    }}
                    className={classNames({
                      "hover:bg-neutral-100 w-4 flex flex-col items-center justify-between h-[144px] absolute top-[265px] left-[56px] ": true,
                      "bg-neutral-100": hoveringAt === "leg",
                    })}
                  >
                    <span className="w-[5px] rounded-full bg-pink-500 h-[2px]"></span>
                    <span className="w-[2px] border-[1px] flex-1 border-dashed border-pink-500"></span>
                    <span className="w-[5px] rounded-full bg-pink-500 h-[2px]"></span>
                  </div>
                  <div
                    id="shoes"
                    onMouseEnter={() => {
                      setHoveringAt("shoes");
                    }}
                    onMouseLeave={() => {
                      setHoveringAt(null);
                    }}
                    className={classNames({
                      "hover:bg-neutral-100 w-4 flex flex-col items-center justify-between h-[30px] absolute top-[435px] left-[56px] transform rotate-[11deg] ": true,
                      "bg-neutral-100": hoveringAt === "shoes",
                    })}
                  >
                    <span className="w-[5px] rounded-full bg-pink-500 h-[2px]"></span>
                    <span className="w-[2px] border-[1px] flex-1 border-dashed border-pink-500"></span>
                    <span className="w-[5px] rounded-full bg-pink-500 h-[2px]"></span>
                  </div>
                  <div
                    id="shoes"
                    onMouseEnter={() => {
                      setHoveringAt("shoes");
                    }}
                    onMouseLeave={() => {
                      setHoveringAt(null);
                    }}
                    className={classNames({
                      "hover:bg-neutral-100 w-4 flex flex-col items-center justify-between h-[30px] absolute top-[435px] right-[44px] transform rotate-[-25deg] ": true,
                      "bg-neutral-100": hoveringAt === "shoes",
                    })}
                  >
                    <span className="w-[5px] rounded-full bg-pink-500 h-[2px]"></span>
                    <span className="w-[2px] border-[1px] flex-1 border-dashed border-pink-500"></span>
                    <span className="w-[5px] rounded-full bg-pink-500 h-[2px]"></span>
                  </div>
                  <div
                    id="height"
                    className="absolute top-[240px] -left-[30px] rotate-90 "
                    onMouseEnter={() => {
                      setHoveringAt("height");
                    }}
                    onMouseLeave={() => {
                      setHoveringAt(null);
                    }}
                  >
                    {/* <span className="w-[5px] rounded-full bg-pink-500 h-[2px]"></span>
                    <span className="w-[2px] border-[1px] flex-1 border-dashed border-pink-500"></span>
                    <span className="w-[5px] rounded-full bg-pink-500 h-[2px]"></span> */}
                    <div
                      className={classNames({
                        "p-4  rounded-full flex items-center": true,
                        "border border-neutral-600": hoveringAt === "height",
                      })}
                    >
                      <input
                        id="default-range"
                        type="range"
                        value={rangeValue}
                        onChange={(e) => setRangeValue(e.target.value)}
                        className="w-[400px] h-0 border-2 border-white border-dashed bg-pink-500 slider rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                      />
                    </div>
                  </div>

                  <img
                    src={SampleImage}
                    className="-ml-[15px]"
                    alt="designer"
                    width={300}
                  />
                </div>
                <br />

                <Button size={"lg"} gradientDuoTone="pinkToOrange">
                  Apply
                </Button>
              </div>
              <div>
                <div
                  className={classNames({
                    "w-32 p-1 hover:bg-red-200 ": true,
                    "bg-red-200": hoveringAt === "height",
                  })}
                  onMouseEnter={() => {
                    setHoveringAt("height");
                  }}
                  onMouseLeave={() => {
                    setHoveringAt(null);
                  }}
                >
                  <div className="mb-2 sm">
                    <Label htmlFor="height" value="Height" />
                  </div>
                  <Select id="height" required>
                    <option value="">{"Select size"}</option>
                    {data?.map((item) => (
                      <option key={item._id} value={item._id}>
                        {item.size}
                      </option>
                    ))}
                  </Select>{" "}
                </div>
                <div
                  className={classNames({
                    "w-32 pb-1 hover:bg-red-200 ": true,
                    "bg-red-200": hoveringAt === "chest",
                  })}
                  onMouseEnter={() => {
                    setHoveringAt("chest");
                  }}
                  onMouseLeave={() => {
                    setHoveringAt(null);
                  }}
                >
                  <div className="mb-2 sm">
                    <Label htmlFor="chest" value="Chest" />
                  </div>
                  <Select id="chest" required>
                    <option value="">{"Select size"}</option>
                    {data?.map((item) => (
                      <option key={item._id} value={item._id}>
                        {item.size}
                      </option>
                    ))}
                  </Select>{" "}
                </div>
                <div
                  className={classNames({
                    "w-32 pb-1 mt-2  hover:bg-red-200 ": true,
                    "bg-red-200": hoveringAt === "waist",
                  })}
                  onMouseEnter={() => {
                    setHoveringAt("waist");
                  }}
                  onMouseLeave={() => {
                    setHoveringAt(null);
                  }}
                >
                  <div className="mb-2 sm">
                    <Label htmlFor="waist" value="Waist" />
                  </div>
                  <Select id="waist" required>
                    <option value="">{"Select size"}</option>
                    {data?.map((item) => (
                      <option key={item._id} value={item._id}>
                        {item.size}
                      </option>
                    ))}
                  </Select>{" "}
                </div>
                <div
                  className={classNames({
                    "w-32 pb-1  hover:bg-red-200 ": true,
                    "bg-red-200": hoveringAt === "hip",
                  })}
                  onMouseEnter={() => {
                    setHoveringAt("hip");
                  }}
                  onMouseLeave={() => {
                    setHoveringAt(null);
                  }}
                >
                  <div className="mb-2 sm">
                    <Label htmlFor="hip" value="Hip" />
                  </div>
                  <Select id="hip" required>
                    <option value="">{"Select size"}</option>
                    {data?.map((item) => (
                      <option key={item._id} value={item._id}>
                        {item.size}
                      </option>
                    ))}
                  </Select>{" "}
                </div>
                <div
                  className={classNames({
                    "w-32 pb-1 mt-28  hover:bg-red-200 ": true,
                    "bg-red-200": hoveringAt === "shoes",
                  })}
                  onMouseEnter={() => {
                    setHoveringAt("shoes");
                  }}
                  onMouseLeave={() => {
                    setHoveringAt(null);
                  }}
                >
                  <div className="mb-2 sm">
                    <Label htmlFor="shoes" value="Shoes" />
                  </div>
                  <Select id="shoes" required>
                    <option value="">{"Select size"}</option>
                    {data?.map((item) => (
                      <option key={item._id} value={item._id}>
                        {item.size}
                      </option>
                    ))}
                  </Select>{" "}
                </div>
              </div>
            </div>
          </Card>
        </Tabs.Item>
        <Tabs.Item title="Get the look">
          <Card className="p-4"></Card>
        </Tabs.Item>
      </Tabs>
    </div>
  );
}
