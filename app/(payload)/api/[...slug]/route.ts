import { REST } from '@payloadcms/next/routes';
import config from '@/cms/payload.config';

const handlers = REST({ config });

export const GET = handlers.GET;
export const POST = handlers.POST;
export const DELETE = handlers.DELETE;
export const PATCH = handlers.PATCH;
