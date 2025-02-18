/*
splitit-web-api-v3

Splitit's Web API

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import { AxiosRequestConfig } from "axios";
import {
  InstallmentPlanApi,
} from "./api";
import { Configuration, ConfigurationParameters } from "./configuration";
import { TypescriptSplititCustom } from "./client-custom";

export class TypescriptSplitit extends TypescriptSplititCustom {
  readonly installmentPlan: InstallmentPlanApi;

  constructor(configurationParameters: ConfigurationParameters) {
    super(configurationParameters);
    const configuration = new Configuration(configurationParameters);
    this.installmentPlan = new InstallmentPlanApi(configuration);
  }

}
