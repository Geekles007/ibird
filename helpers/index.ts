import { twMerge } from 'tailwind-merge';
import clsx, { ClassValue } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function fetchData<T>(
  url: string,
  { method, body, headers }: RequestInit
): Promise<T> {
  try {
    const response = await fetch(url, {
      method,
      ...headers,
      body,
      cache: 'no-cache',
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      return response.json() as T;
    } else if (contentType && contentType.includes('text/plain')) {
      return response.text() as T;
    } else {
      throw new Error('Unsupported response type');
    }
  } catch (error: any) {
    throw new Error(`Fetch error: ${error.message}`);
  }
}
