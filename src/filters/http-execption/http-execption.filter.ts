import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';
@Catch(HttpException)
export class HttpExecptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const resp = ctx.getResponse<Response>();
    const status = exception.getStatus();
    const message = exception.message;

    const exceptionResp: any = exception.getResponse();
    let validatorMessage = exceptionResp;

    if (typeof validatorMessage === 'object') {
      if (Array.isArray(validatorMessage.message)) {
        validatorMessage = exceptionResp.message[0];
      }
      validatorMessage = exceptionResp.message;
    }
    resp.status(status).json({
      code: status,
      message: validatorMessage || message,
    });
  }
}
