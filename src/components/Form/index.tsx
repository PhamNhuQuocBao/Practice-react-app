import React from "react";
import FormItem from "./FormItem";
import Input from "../Input";
import Select from "../Select";
import { OPTIONS_STATUS, OPTIONS_TYPES } from "../../constants/options";
import Button from "../Button";
// import { UploadCloud } from "../../assets/icons";
// import UploadImageSolid from "../../assets/icons/UploadImageSolid.svg";
// import Close from "../../assets/icons/Close.svg";
import UploadCloud from "../../assets/icons/UploadCloud";
import UploadImageDefault from "../../assets/icons/UploadImageDefault.svg";
import "./Form.scss";

interface FormProps {
  id?: string;
}

const Form: React.FC<FormProps> = () => {
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <FormItem classNameError="error-message">
          <img src={UploadImageDefault} alt="" />
          <Button type="default">
            <label htmlFor="product-image">Click to upload</label>
            <Input type="file" id="product-image" name="product-image" />
          </Button>
        </FormItem>
        <FormItem classNameError="error-message" label="Name">
          <Input
            type="text"
            id="name"
            name="name"
            placeholder="Enter name..."
          />
        </FormItem>
        <FormItem classNameError="error-message" label="Quantity">
          <Input type="number" id="quantity" name="quantity" placeholder="0" />
        </FormItem>
        <FormItem classNameError="error-message" label="Price">
          <Input type="number" id="price" name="price" placeholder="0" />
        </FormItem>
        <div className="cols">
          <FormItem classNameError="error-message" label="Status">
            <Select id="status" name="status" options={OPTIONS_STATUS} />
          </FormItem>
          <FormItem classNameError="error-message" label="Types">
            <Select id="types" name="types" options={OPTIONS_TYPES} />
          </FormItem>
        </div>
        <div className="cols">
          <FormItem classNameError="error-message" label="Brand">
            <Input
              type="text"
              id="brand"
              name="brand"
              placeholder="Enter brand..."
            />
          </FormItem>
          <FormItem classNameError="error-message" label="Brand Image">
            <img src="../../assets/icons/UploadImageSolid.svg" alt="" />
            <Button type="default" icon={<UploadCloud />}>
              Upload photo
            </Button>
          </FormItem>
        </div>
      </form>
    </>
  );
};

export default React.memo(Form);
