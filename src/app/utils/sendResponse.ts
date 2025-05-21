/* eslint-disable @typescript-eslint/no-explicit-any */
import { Response } from 'express';

// Optional metadata structure to support pagination, sorting, and searching
type TMeta = {
  page?: number;
  limit?: number;
  total?: number;
  totalPages?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  searchTerm?: string;
  filters?: Record<string, any>; 
};

type TResponse<T> = {
  statusCode: number;
  success: boolean;
  message?: string;
  data: T;
  meta?: TMeta; // optional meta information
};

const sendResponse = <T>(res: Response, payload: TResponse<T>) => {
  const { statusCode, success, message, data, meta } = payload;

  res.status(statusCode).json({
    success,
    message,
    statusCode,
    data,
    ...(meta && { meta }), // include meta only if available
  });
};

export default sendResponse;
