/* tslint:disable */
/* eslint-disable */
/**
 * ABC30
 * ABC30
 *
 * The version of the OpenAPI document: 1.0
 * Contact: zsolt.nagy@ingenimind.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import * as runtime from "../runtime";
import type { PageDTO } from "../models";
import { PageDTOFromJSON, PageDTOToJSON } from "../models";

export interface GetPageV1Request {
  xApiVersion?: string;
  letterId?: string;
  pageNumber?: number;
}

/**
 *
 */
export class PageApi extends runtime.BaseAPI {
  /**
   * Gets a page
   * Get page
   */
  async getPageV1Raw(
    requestParameters: GetPageV1Request,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<Array<PageDTO>>> {
    const queryParameters: any = {};

    if (requestParameters["letterId"] != null) {
      queryParameters["letterId"] = requestParameters["letterId"];
    }

    if (requestParameters["pageNumber"] != null) {
      queryParameters["pageNumber"] = requestParameters["pageNumber"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (requestParameters["xApiVersion"] != null) {
      headerParameters["x-api-version"] = String(
        requestParameters["xApiVersion"],
      );
    }

    const response = await this.request(
      {
        path: `/api/pages`,
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      jsonValue.map(PageDTOFromJSON),
    );
  }

  /**
   * Gets a page
   * Get page
   */
  async getPageV1(
    requestParameters: GetPageV1Request = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<Array<PageDTO>> {
    const response = await this.getPageV1Raw(requestParameters, initOverrides);
    return await response.value();
  }
}
