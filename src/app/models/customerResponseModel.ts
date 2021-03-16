import { BaseResponseModel } from "./baseResponseModel";
import { Customer } from "./customer";

export interface CustomerResponseModel extends BaseResponseModel{
    data:Customer[];
}