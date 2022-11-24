import DefaultLayout from '@/Layouts/Default'
import '../styles/global.css'

interface Props {
  Component: React.ComponentType
}

const MyApp: React.FC<Props> = ({ Component }) => {
  return (
    <DefaultLayout>
      <Component />
    </DefaultLayout>
  )
}
export default MyApp
