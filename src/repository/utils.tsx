/**
 * 주어진 jwt 토큰을 bearer 토큰으로 파싱하는 함수
 * @param {string} jwtToken
 * @returns {string} bearerToken
 */


 const getBearerToken = (jwtToken : string) => {
    return `Bearer ${jwtToken}`;
  };
  
  /**
   *
   * @param {string} jwtToken
   * @returns jwt bearer token을 포함하는 인증 헤더를 만들어주는 함수
   */
  const getAuthorizationHeader = (jwtToken : string) => {
    return {
      headers: {
        Authorization: getBearerToken(jwtToken),
      },
    };
  };
  
  /**
   * 사용자 정의 api에서 발생한 axiosResponse로부터 data만 뽑아오는 함수
   * @param {import("axios").AxiosResponse} response
   * @returns {any} responseData
   */
//   const extractDataFromResponse = (response) => {
//     const responseBody = response.data;
  
//     return responseBody.data;
//   };
  
  /**
   * 주어진 쿼리 파라미터 정보를 조합하여 url을 반환하는 함수
   * @param {string} baseUrl
   * @param {Object} queryParamsInfo
   * @returns {string} requestUrl
   */
  const getRequestUrlWithQueryParams = (baseUrl : string, queryParamsInfo : string) => {
    const tmp = `${baseUrl}?`;
  
    const result = Object.entries(queryParamsInfo).reduce((acc, [key, value]) => {
      return `${acc}${key}=${value}&`;
    }, tmp);
  
    return result.slice(0, -1);
  };
  
  export default {
    getAuthorizationHeader,
    // extractDataFromResponse,
    getRequestUrlWithQueryParams,
  };
  