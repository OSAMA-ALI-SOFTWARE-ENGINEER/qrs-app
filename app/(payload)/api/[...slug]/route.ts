import { getPayload } from 'payload';
import config from '@/cms/payload.config';

const payload = getPayload({ config });

export const GET = async (req: Request) => {
  const payloadInstance = await payload;
  const url = new URL(req.url);
  const pathname = url.pathname.replace('/api/', '');

  return payloadInstance.http({
    pathname,
    req,
  });
};

export const POST = async (req: Request) => {
  const payloadInstance = await payload;
  const url = new URL(req.url);
  const pathname = url.pathname.replace('/api/', '');

  return payloadInstance.http({
    pathname,
    req,
  });
};

export const PATCH = async (req: Request) => {
  const payloadInstance = await payload;
  const url = new URL(req.url);
  const pathname = url.pathname.replace('/api/', '');

  return payloadInstance.http({
    pathname,
    req,
  });
};

export const DELETE = async (req: Request) => {
  const payloadInstance = await payload;
  const url = new URL(req.url);
  const pathname = url.pathname.replace('/api/', '');

  return payloadInstance.http({
    pathname,
    req,
  });
};

export const PUT = async (req: Request) => {
  const payloadInstance = await payload;
  const url = new URL(req.url);
  const pathname = url.pathname.replace('/api/', '');

  return payloadInstance.http({
    pathname,
    req,
  });
};
