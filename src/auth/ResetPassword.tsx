import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Link, Grid } from '@material-ui/core'
import {
  useTheme,
  createStyles,
  makeStyles,
  Theme
} from '@material-ui/core/styles'

import Layout from '../app/AppLayout'
import AuthButton from './components/AuthButton'
import AuthEmailField from './components/AuthEmailField'
import AuthLayout from './components/AuthLayout'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1)
    }
  })
)

export interface AuthResetProps {}

const AuthReset: React.SFC<AuthResetProps> = () => {
  const [email, setEmail] = useState<string>('')
  const history = useHistory()

  const submitHandler = (e: any) => {
    e.preventDefault()
    console.log('submit', e)
    console.log(email)
  }

  const classes = useStyles(useTheme())

  return (
    <Layout title='RA2 Reset Password'>
      <AuthLayout title='Reset'>
        <form
          className={classes.form}
          onSubmit={e => submitHandler(e)}
          noValidate>
          <AuthEmailField setEmail={email => setEmail(email)} />
          <AuthButton disabled={true}>Reset</AuthButton>
          <Grid container>
            <Grid item xs></Grid>
            <Grid item>
              <Link
                href='#'
                onClick={() => history.push('/auth/confirm')}
                variant='body2'>
                {'Already have confirmation code?'}
              </Link>
            </Grid>
          </Grid>
        </form>
      </AuthLayout>
    </Layout>
  )
}

export default AuthReset