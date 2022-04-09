// this file is auto-generated
import type { RequestHandler as GenericRequestHandler, ResponseBody, Load as GenericLoad } from '@sveltejs/kit';

export type RequestHandler<Output extends ResponseBody = ResponseBody> = GenericRequestHandler<{ businessID: string }, Output>;

export type Load<
	InputProps extends Record<string, any> = Record<string, any>,
	OutputProps extends Record<string, any> = InputProps
> = GenericLoad<{ businessID: string }, InputProps, OutputProps>;