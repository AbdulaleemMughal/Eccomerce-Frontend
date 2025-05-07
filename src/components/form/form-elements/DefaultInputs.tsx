import { useState } from "react";
import ComponentCard from "../../common/ComponentCard";
import Label from "../Label";
import Input from "../input/InputField";
import TextArea from "../input/TextArea.tsx";
import FileInput from "../input/FileInput.tsx";
import MultiSelect from "../MultiSelect.tsx";
import { colorOptions, multiOptions, options } from "../../../utils/options.ts";
import Select from "../Select.tsx";
import Button from "../../ui/button/Button.tsx";
import axios from "axios";
import { BASE_URL } from "../../../utils/constant.ts";
import { ProductInterface } from "../../../interfaces/Data.interface.ts";
import Alert from "../../ui/alert/Alert.tsx";

export default function DefaultInputs() {
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [productData, setProductData] = useState<ProductInterface>({
    title: "",
    price: null,
    description: "",
    discountedPrice: null,
    category: "",
    colors: [],
    sizes: [],
    image: "",
  });

  const handleImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "first-time-using-cloudnary");
    formData.append("cloud_name", "djiwbvv29");

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/djiwbvv29/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();
    setImage(data.secure_url);

    setProductData((prev) => ({
      ...prev,
      image: data.secure_url,
    }));
  };

  const handleAddProduct = async () => {
    try {
      const res = await axios.post(BASE_URL + "/add-product", productData, {
        withCredentials: true,
      });
      setMessage(res?.data?.message);
      if (res.status === 200) {
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 1500);
        setProductData({
          title: "",
          price: null,
          description: "",
          discountedPrice: null,
          category: "",
          colors: [],
          sizes: [],
          image: "",
        });
      }
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 400) {
          setErrorMessage(err.response.data.message);
          setTimeout(() => {
            setErrorMessage("");
          }, 2000);
        }
      } else {
        console.error("Unexpected error:", err);
      }
    }
  };

  return (
    <ComponentCard title="Product Inputs">
      {showAlert && (
        <Alert variant="success" title="Updated" message={message} />
      )}

      <div className="space-y-6">
        <div>
          <Label htmlFor="input">Name</Label>
          <Input
            type="text"
            id="input"
            placeholder="Enter the name"
            value={productData?.title}
            onChange={(e) => {
              setProductData((prev) => ({
                ...prev,
                title: e.target.value,
              }));
            }}
          />
        </div>
        <div>
          <Label htmlFor="inputTwo">Price</Label>
          <Input
            type="number"
            id="inputTwo"
            placeholder="Enter the total price"
            value={productData?.price || ""}
            onChange={(e) => {
              setProductData((prev) => ({
                ...prev,
                price: Number(e.target.value),
              }));
            }}
          />
        </div>
        <div>
          <Label>Discounted Price</Label>
          <Input
            type="number"
            id="inputTwo"
            placeholder="Enter the discounted price"
            value={productData?.discountedPrice || ""}
            onChange={(e) => {
              setProductData((prev) => ({
                ...prev,
                discountedPrice: Number(e.target.value),
              }));
            }}
          />
        </div>
        <div>
          <Label>Description</Label>
          <TextArea
            rows={6}
            value={productData?.description}
            onChange={(e) => {
              setProductData((prev) => ({
                ...prev,
                description: e,
              }));
            }}
          />
        </div>
        <div>
          <MultiSelect
            label="Available Colors"
            options={colorOptions}
            defaultSelected={productData?.colors}
            onChange={(e) => {
              setProductData((prev) => ({
                ...prev,
                colors: e,
              }));
            }}
          />
        </div>
        <div>
          <Label>Upload Image</Label>
          <FileInput className="custom-class" onChange={handleImage} />
        </div>
        <div>
          <Label>Select Category</Label>
          <Select
            options={options}
            placeholder="Select Category"
            onChange={(e) => {
              setProductData((prev) => ({
                ...prev,
                category: e,
              }));
            }}
            defaultValue={productData?.category}
            className="dark:bg-dark-900"
          />
        </div>
        <div>
          <MultiSelect
            label="Available Sizes"
            options={multiOptions}
            defaultSelected={productData?.sizes}
            onChange={(e) => {
              setProductData((prev) => ({
                ...prev,
                sizes: e,
              }));
            }}
          />
          <p className="sr-only">
            Selected Values:
            {productData?.sizes}
          </p>
        </div>
        {errorMessage && (
          <p className="text-red-700 text-center">{errorMessage}</p>
        )}
      </div>
      <div className="flex justify-end">
        <Button children="Add Product" onClick={handleAddProduct} />
      </div>
    </ComponentCard>
  );
}
