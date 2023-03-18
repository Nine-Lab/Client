/* eslint-disable */

import axios from 'axios';

import requestUrls from './userRequestUrls';
import utils from '../utils';

export class UserRepository {
  /**
   * 회원가입 요청을 수행하는 메소드입니다
   * @param {{email: string, password: string, name: string, address: string, phoneNumber: string, roles: string[]}} registerUserRequest
   * @returns {Promise<{id: string, email: string, password: string, name: string, address: string, phoneNumber: string, roles: string[]}>}
   */
  
  async register(registerUserRequest : string) {
    try {
      const response = await axios.post(
        requestUrls.REGISTER,
        registerUserRequest,
      );

      return utils.extractDataFromResponse(response);
    } catch (error) {
      console.log(error);
    }
  }

  async getJwtToken(loginRequest : string) {
    const response = await axios.post(requestUrls.LOGIN_REQUEST, loginRequest);

    return utils.extractDataFromResponse(response).token;
  }

  /**
   * 관리자계정 로그인 시도하는 메소드입니다
   * @param {{email: string, password: string}} loginRequest
   * @returns {Promise<{id: string, email: string, token: string}>} loginResponse
   */
  async adminLogin(loginRequest : string) {
    try {
      const jwtToken = await this.getJwtToken(loginRequest);

      const adminAuthResponse = await axios.get(
        requestUrls.AUTH_ADMIN,
        utils.getAuthorizationHeader(jwtToken),
      );

      const authResponseBody = adminAuthResponse.data;
      const { id, email } = authResponseBody.data;

      return { id, email, token: jwtToken };
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * 사용자계정 로그인 시도하는 메소드입니다
   * @param {{email: string, password: string}} loginRequest
   * @returns {Promise<{id: string, email: string, token: string}>} loginResponse
   */
  async userLogin(loginRequest : string) {
    try {
      const jwtToken = await this.getJwtToken(loginRequest);

      const userAuthResponse = await axios.get(
        requestUrls.AUTH_USER,
        utils.getAuthorizationHeader(jwtToken),
      );

      const authResponseBody = userAuthResponse.data;
      const { id, email } = authResponseBody.data;

      return { id, email, token: jwtToken };
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * 사용자 프로필을 얻어오는 메소드
   * @param {string} jwtToken
   * @returns {Promise<{id: string, email: string, name: string, address: string, phoneNumber: string, roles: string[]}>} profile
   */
  async getProfile(jwtToken :string) {
    try {
      const response = await axios.get(
        requestUrls.READ_PROFILE,
        utils.getAuthorizationHeader(jwtToken),
      );

      return utils.extractDataFromResponse(response);
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * 유저의 정보를 업데이트하는 메소드
   * @param {{address?: string, password?: string}} updateUserRequest
   * @param {string} jwtToken
   * @returns {Promise<{id: string, email: string, name: string, address: string, phoneNumber: string, roles: string[]}>} updateResponse
   */
  async updateUser(updateUserRequest : string , jwtToken : string) {
    try {
      const response = await axios.put(
        requestUrls.UPDATE_USER,
        updateUserRequest,
        utils.getAuthorizationHeader(jwtToken),
      );

      return utils.extractDataFromResponse(response);
    } catch (error) {
      console.log(error);
    }
  }

  /**
   *
   * @param {string} jwtToken
   * @returns {Promise<{id: string, email: string}>} deleteResponse
   */
  async deleteUser(jwtToken :string) {
    try {
      const response = await axios.delete(
        requestUrls.DELETE_USER,
        utils.getAuthorizationHeader(jwtToken),
      );

      return utils.extractDataFromResponse(response);
    } catch (error) {
      console.log(error);
    }
  }
}
