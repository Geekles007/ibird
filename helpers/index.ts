import { twMerge } from 'tailwind-merge';
import clsx, { ClassValue } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function fetchData<T>(
  url: string,
  options: RequestInit & { next?: { revalidate?: number } } = {}
): Promise<T> {
  try {
    const response = await fetch(url, {
      ...options,
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
