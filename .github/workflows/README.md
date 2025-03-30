# CI/CD with GitHub Actions & Discord Notifications

## Overview

This repository includes a **GitHub Actions workflow** that automates the build and deployment process while sending real-time status updates to a **Discord bot**. The bot receives deployment notifications via a FastAPI endpoint and posts them in a Discord thread.

## Features

- **Automated Build & Deployment**: Runs when changes are pushed to the `main` branch.
- **GitHub Actions Integration**: Uses Node.js with `pnpm` for installation and build.
- **Deploys to GitHub Pages**: Automatically publishes the project.
- **Discord Notifications**: Sends build and deployment status updates to a Discord thread.
- **Workflow Inputs & Secrets**: Stores sensitive data securely in **GitHub repository secrets**.

---

## Setup & Configuration

### 1. Store Secrets in GitHub Repository

Go to **GitHub Repository → Settings → Secrets and Variables → Actions → New Repository Secret**, and add:

- **`DISCORD_BOT_TOKEN`** → The Discord bot token.

### 2. Define Workflow Inputs

Modify `.github/workflows/deploy.yml` to store and use:

```yaml
env:
  BOT_SERVER_URL: 'https://your-ngrok-url/send'
```

Replace `https://your-ngrok-url/send` with your actual FastAPI server URL.

### 3. Configure the Discord Bot

Ensure your Discord bot:

- Has permissions to send messages in the target thread.
- Uses `discord.py` and `FastAPI` to handle incoming requests.
- Extracts `status` and `message` from the JSON payload and posts them in the thread.

---

## Workflow Explanation

### 📌 Build Job

The workflow starts when code is pushed to `main`:

1. **Checkout Repository**: Clones the repo.
2. **Setup Node.js & Install Dependencies**: Uses `pnpm`.
3. **Build Project**: Runs `pnpm run build`.
4. **Upload Build Files**: Saves the `./dist` folder as an artifact.

### 🚀 Deploy Job

Triggered only if the **Build** job is successful:

1. **Download Build Files**: Retrieves artifacts from the `Build` job.
2. **Deploy to GitHub Pages**:
   - Uses `peaceiris/actions-gh-pages` to publish `./dist` to GitHub Pages.
3. **Notify Discord**:
   - If deployment **succeeds** → Sends ✅ "Deployment successful!"
   - If deployment **fails** → Sends ❌ "Deployment failed!"

---

## API Endpoint

The Discord bot runs a FastAPI server to receive notifications:

```python
@app.post("/send")
async def receive_github_notification(request: Request):
    data = await request.json()
    status = data.get("status", "unknown")
    message = data.get("message", "No message provided.")
    await send_discord_notification(status, message)
    return {"status": "ok", "message": "Notification sent to Discord"}
```

---

## Running Locally

1. Run the Discord bot separately.
2. Expose your local API using **ngrok**:
   ```sh
   ngrok http 8000
   ```
3. Update the `BOT_SERVER_URL` in **GitHub Actions** with the ngrok URL.

---

## Future Improvements

- **Improved Modularity**: Separate CI/CD logic into a reusable module.
- **More Customization**: Add configurable parameters for different environments.
- **Enhanced Error Handling**: Implement logging and retries for Discord notifications.
- **Multiple Environments**: Support both staging and production deployments.

---

## License

This project is open-source under the **MIT License**.

Happy coding! 🚀
