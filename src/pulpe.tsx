import { RouterProvider } from 'react-router-dom'
import { appRouter } from './appRouter'

export default function Pulpe() {
  return <RouterProvider router={appRouter} />
}