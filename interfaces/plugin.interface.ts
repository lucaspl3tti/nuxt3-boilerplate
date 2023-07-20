/**
 * ##### Define default plugin interfaces
 */
// Interface for element create options
export interface ElementCreateOptions {
  id?: string
  classes?: string | string[]
  text?: string
  dataset?: object
  [key: string]: any
}
