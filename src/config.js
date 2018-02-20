'use strict'

class Config {
	constructor() {
		super();

		this.provider = '';
		this.clientId = '';
		this.clientSecret = '';
		this.apiKey = '';
	}

	static getProvider() {
		return this.provider;
	}

	static setProvider(provider) {
		if (!provider) {
			throw Error('Provider must be specified when making this call');
		}

		this.provider = provider;
  }

  static getClientId() {
		return this.clientId;
	}

	static setClientId(clientId) {
		if (!clientId) {
			throw Error('ClientId must be specified when making this call');
		}

		this.clientId = clientId;
  }


  static getClientSecret() {
		return this.clientSecret;
	}

	static setClientSecret(clientSecret) {
		if (!clientSecret) {
			throw Error('ClientId must be specified when making this call');
		}

		this.clientSecret = clientSecret;
	}

	static getApiKey() {
		return this.apiKey;
	}

	static setApiKey(apiKey) {
		if (!apiKey) {
			throw Error('ClientId must be specified when making this call');
		}

		this.apiKey = apiKey;
  }

};

modules.export = Config;
