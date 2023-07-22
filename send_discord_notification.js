const axios = require('axios')
const webhookUrl = process.env.WEBHOOK_URL
const successMessage = '✅ Workflow is completed successfully!'
const errorMessage = '❌ Workflow failed!'
const message = process.env.GITHUB_JOB === 'success' ? successMessage : errorMessage

axios.post(webhookUrl, { content: message })
  .then(() => console.log('Discord notification sent successfully.'))
  .catch(error => console.error('Failed to send Discord notification:', error.message))
