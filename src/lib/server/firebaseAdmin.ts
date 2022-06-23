/**
 * Wrapper for firebase or any server(less) service
 */

import { browser } from '$app/env'
import admin from 'firebase-admin'
import 'dotenv/config'//


function firebaseInit() {
	if (browser || admin.apps.length) return

  const serviceAccount = {} //JSON.parse(process.env.ADMIN_PRIVATE_KEY);
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: `https://${ serviceAccount.project_id }.firebaseio.com`
  });
}


