import { useState } from "react";
import ComponentCard from "../../common/ComponentCard";
import Label from "../Label";
import Input from "../input/InputField";
import { TimeIcon } from "../../../icons";
import DatePicker from "../date-picker.tsx";
import TextArea from "../input/TextArea.tsx";
import FileInput from "../input/FileInput.tsx";
import MultiSelect from "../MultiSelect.tsx";
import { multiOptions, options } from "../../../utils/options.ts";
import Select from "../Select.tsx";
import Button from "../../ui/button/Button.tsx";

export default function DefaultInputs() {
  const [message, setMessage] = useState("");
  const [category, setCategory] = useState("");
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("Selected file:", file.name);
    }
  };

  const handleSelectChange = (value: string) => {
    setCategory(value);
    console.log("Selected value:", value);
  };

  return (
    <ComponentCard title="Product Inputs">
      <div className="space-y-6">
        <div>
          <Label htmlFor="input">Name</Label>
          <Input type="text" id="input" placeholder="Enter the name" />
        </div>
        <div>
          <Label htmlFor="inputTwo">Price</Label>
          <Input
            type="number"
            id="inputTwo"
            placeholder="Enter the total price"
          />
        </div>
        <div>
          <Label>Discounted Price</Label>
          <Input
            type="number"
            id="inputTwo"
            placeholder="Enter the discounted price"
          />
        </div>
        <div>
          <Label>Description</Label>
          <TextArea
            value={message}
            onChange={(value) => setMessage(value)}
            rows={6}
          />
        </div>
        <div>
          <Label>Upload Image</Label>
          <FileInput onChange={handleFileChange} className="custom-class" />
        </div>
        <div>
          <Label>Select Category</Label>
          <Select
            options={options}
            placeholder="Select Category"
            onChange={handleSelectChange}
            className="dark:bg-dark-900"
          />
        </div>
        <div>
          <MultiSelect
            label="Availabel Sizes"
            options={multiOptions}
            defaultSelected={["small", "medium"]}
            onChange={(values) => setSelectedValues(values)}
          />
          <p className="sr-only">
            Selected Values: {selectedValues.join(", ")}
          </p>
        </div>

        <div>
          <DatePicker
            id="date-picker"
            label="Date Picker Input"
            placeholder="Select a date"
            onChange={(dates, currentDateString) => {
              // Handle your logic
              console.log({ dates, currentDateString });
            }}
          />
        </div>

        <div>
          <Label htmlFor="tm">Time Picker Input</Label>
          <div className="relative">
            <Input
              type="time"
              id="tm"
              name="tm"
              onChange={(e) => console.log(e.target.value)}
            />
            <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
              <TimeIcon className="size-6" />
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <Button children="Add Product" />
      </div>
    </ComponentCard>
  );
}
