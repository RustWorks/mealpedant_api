import { api_version } from './api_version';
import { config } from 'dotenv';
import { resolve } from 'path';
config({ path: resolve(__dirname, '../../.env.local') });

const env = process.env;
const major = api_version.split('.')[0];

if (isNaN(Number(major))) throw Error('!major || isNaN');

if (!env.LOCATION_LOG_ERROR) throw Error('!env.LOCATION_LOG_ERROR');
if (!env.LOCATION_LOG_COMBINED) throw Error('!env.LOCATION_LOG_COMBINED');
if (!env.LOCATION_LOG_EXCEPTION) throw Error('!env.LOCATION_LOG_EXCEPTION');

if (!env.LOCATION_PHOTO_STATIC_ORIGINAL) throw new Error('!env.LOCATION_PHOTO_STATIC_ORIGINAL');
if (!env.LOCATION_PHOTO_STATIC_CONVERTED) throw new Error('!env.LOCATION_PHOTO_STATIC_CONVERTED');

if (!env.LOCATION_WATERMARK) throw new Error('!env.WATERMARK');

if (!env.PG_DATABASE) throw Error('!env.PG_DATABASE');
if (!env.PG_HOST) throw Error('!env.PG_HOST');
if (!env.PG_PASS) throw Error('!env.PG_PASS');
if (!env.PG_PORT || isNaN(Number(env.PG_PORT))) throw Error('!env.PG_PORT || isNaN');
if (!env.PG_USER) throw Error('!env.PG_USER');

if (!env.RABBITMQ_HOSTNAME) throw Error('!env.RABBITMQ_HOSTNAME');
if (!env.RABBITMQ_USERNAME) throw Error('!env.RABBITMQ_USERNAME');
if (!env.RABBITMQ_PASSWORD) throw Error('!env.RABBITMQ_PASSWORD');
if (!env.RABBITMQ_VHOST) throw Error('!env.RABBITMQ_VHOST');
if (!env.RABBITMQ_QUEUE_NAME_PHOTO_CONVERTOR) throw Error('!env.RABBITMQ_QUEUE_NAME_PHOTO_CONVERTOR');
if (!env.RABBITMQ_PORT || isNaN(Number(env.RABBITMQ_PORT))) throw Error('!env.RABBITMQ_PORT');

if (!env.APP_NAME) throw Error('!env.APP_NAME');

export const APP_NAME = env.APP_NAME;

export const MODE_ENV_DEV = env.NODE_ENV === 'development';
export const MODE_ENV_PRODUCTION = env.NODE_ENV === 'production';
export const MODE_ENV_TEST = env.NODE_ENV === 'test';

export const SHOW_LOGS = env.SHOW_LOGS;

export const LOCATION_LOG_ERROR = env.LOCATION_LOG_ERROR;
export const LOCATION_LOG_COMBINED = env.LOCATION_LOG_COMBINED;
export const LOCATION_LOG_EXCEPTION = env.LOCATION_LOG_EXCEPTION;

export const LOCATION_WATERMARK = env.LOCATION_WATERMARK;
export const LOCATION_PHOTO_STATIC_CONVERTED = env.LOCATION_PHOTO_STATIC_CONVERTED;
export const LOCATION_PHOTO_STATIC_ORIGINAL = env.LOCATION_PHOTO_STATIC_ORIGINAL;

export const PG_DATABASE = env.PG_DATABASE;
export const PG_HOST = env.PG_HOST;
export const PG_PASS = env.PG_PASS;
export const PG_PORT = Number(env.PG_PORT);
export const PG_USER = env.PG_USER;

export const RABBITMQ_HOSTNAME = env.RABBITMQ_HOSTNAME;
export const RABBITMQ_USERNAME = env.RABBITMQ_USERNAME;
export const RABBITMQ_PASSWORD = env.RABBITMQ_PASSWORD;
export const RABBITMQ_VHOST	= env.RABBITMQ_VHOST;
export const RABBITMQ_QUEUE_NAME_PHOTO_CONVERTOR = env.RABBITMQ_QUEUE_NAME_PHOTO_CONVERTOR;
export const RABBITMQ_PORT = Number(env.RABBITMQ_PORT);
