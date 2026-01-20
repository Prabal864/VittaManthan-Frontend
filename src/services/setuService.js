
import axios from "axios";

const API_URL = "https://fiu-uat.setu.co"; // Example URL, should be configured

export const setuService = {
  login: async () => {
    console.log("Logging in to SETU via backend...");
    try {
      const response = await axios.post("http://localhost:8072/api/setu/auth/login", {}, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      return response.data;
    } catch (error) {
      console.error("SETU Login Error:", error);
      throw error;
    }
  },

  createConsent: async (token, consentDetails) => {
    console.log("Creating consent via backend...", consentDetails);
    try {
      const response = await axios.post("http://localhost:8072/api/setu/auth/consent", consentDetails, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      });

      return response.data;
    } catch (error) {
      console.error("SETU Consent Error:", error);
      throw error;
    }
  },

  getConsentStatus: async (token, consentId) => {
    console.log(`Fetching consent status for ${consentId}...`);
    try {
      const response = await axios.get(`http://localhost:8072/api/setu/auth/${consentId}/status?expanded=false`, {
        headers: {
          "Authorization": `Bearer ${token}`
        },
      });

      return response.data;
    } catch (error) {
      console.error("SETU Consent Status Error:", error);
      throw error;
    }
  }
};
