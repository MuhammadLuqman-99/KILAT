"use client";

import { useState } from "react";

export default function DemoPage() {
  const [activeDemo, setActiveDemo] = useState("deployment");
  const [deploymentInput, setDeploymentInput] = useState("");
  const [deploymentOutput, setDeploymentOutput] = useState("");
  const [promptInput, setPromptInput] = useState("");
  const [promptOutput, setPromptOutput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const generateDeploymentScript = async () => {
    if (!deploymentInput.trim()) return;

    setIsGenerating(true);

    // Simulate AI processing
    setTimeout(() => {
      const script = `#!/bin/bash
# AI-Generated Deployment Script for ${deploymentInput}
echo "🚀 Starting deployment for ${deploymentInput}..."

# Update system
sudo apt update && sudo apt upgrade -y

# Install NGINX
sudo apt install nginx -y
sudo systemctl start nginx
sudo systemctl enable nginx

# Install PHP 8.2
sudo apt install php8.2-fpm php8.2-mysql php8.2-curl php8.2-json php8.2-zip -y

# Install MySQL/MariaDB
sudo apt install mariadb-server -y
sudo systemctl start mariadb
sudo systemctl enable mariadb

# Create project directory
sudo mkdir -p /var/www/${deploymentInput.toLowerCase()}
cd /var/www/${deploymentInput.toLowerCase()}

# Clone your repository (replace with your repo URL)
# git clone https://github.com/username/${deploymentInput.toLowerCase()}.git .

# Install Composer dependencies
composer install --optimize-autoloader --no-dev

# Set permissions
sudo chown -R www-data:www-data /var/www/${deploymentInput.toLowerCase()}
sudo chmod -R 755 /var/www/${deploymentInput.toLowerCase()}

# Configure NGINX
sudo tee /etc/nginx/sites-available/${deploymentInput.toLowerCase()} > /dev/null <<EOF
server {
    listen 80;
    server_name your-domain.com;
    root /var/www/${deploymentInput.toLowerCase()}/public;

    index index.php index.html;

    location / {
        try_files \\$uri \\$uri/ /index.php?\\$query_string;
    }

    location ~ \\.php\\$ {
        fastcgi_pass unix:/run/php/php8.2-fpm.sock;
        fastcgi_index index.php;
        include fastcgi_params;
        fastcgi_param SCRIPT_FILENAME \\$realpath_root\\$fastcgi_script_name;
    }
}
EOF

# Enable site
sudo ln -s /etc/nginx/sites-available/${deploymentInput.toLowerCase()} /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx

echo "✅ Deployment completed successfully!"
echo "📝 Remember to:"
echo "1. Configure your .env file"
echo "2. Run php artisan migrate"
echo "3. Set up SSL with certbot"
`;

      setDeploymentOutput(script);
      setIsGenerating(false);
    }, 2000);
  };

  const optimizePrompt = async () => {
    if (!promptInput.trim()) return;

    setIsGenerating(true);

    // Simulate AI processing
    setTimeout(() => {
      const optimized = `🔥 OPTIMIZED PROMPT:

**Original:** ${promptInput}

**Enhanced Version:**
Act as an expert ${promptInput.includes('code') ? 'software developer' : 'professional'} with 10+ years of experience.

Your task: ${promptInput}

Please follow this structure:
1. **Analysis**: First, analyze the requirements
2. **Solution**: Provide a detailed, step-by-step solution
3. **Best Practices**: Include industry best practices
4. **Examples**: Give practical examples
5. **Troubleshooting**: Anticipate common issues

Additional context: Consider performance, security, and scalability.

Output format: Clear, actionable, and beginner-friendly explanations.

**Why this is better:**
✅ Clearer role definition
✅ Structured approach
✅ Specific output format
✅ Includes best practices
✅ Anticipates edge cases

**Expected improvement:** 300% better results`;

      setPromptOutput(optimized);
      setIsGenerating(false);
    }, 1500);
  };

  const demos = [
    {
      id: "deployment",
      title: "Deployment Script Generator",
      description: "Generate custom deployment scripts for your applications"
    },
    {
      id: "prompt",
      title: "Prompt Optimizer",
      description: "Optimize your AI prompts for better results"
    },
    {
      id: "config",
      title: "Server Config Generator",
      description: "Generate optimized server configurations"
    }
  ];

  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Cuba AI Tools Kami Percuma
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Test drive tools AI yang powerful sebelum anda beli. Rasai sendiri kehebatan tools yang kami tawarkan dalam ebook kami.
          </p>
          <div className="mt-6 p-4 bg-accent/10 rounded-lg border border-accent/20">
            <p className="text-sm text-accent">
              <strong>Tips:</strong> Tools ini adalah versi demo. Versi penuh dalam ebook kami mempunyai 10x lebih banyak features dan templates!
            </p>
          </div>
        </div>

        {/* Demo Selection */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {demos.map((demo) => (
              <button
                key={demo.id}
                onClick={() => setActiveDemo(demo.id)}
                className={`px-6 py-3 rounded-lg border transition-colors ${
                  activeDemo === demo.id
                    ? "bg-accent text-accent-foreground border-accent"
                    : "bg-background text-foreground border-border hover:bg-accent/10"
                }`}
              >
                <div className="text-left">
                  <div className="font-semibold">{demo.title}</div>
                  <div className="text-sm opacity-80">{demo.description}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Demo Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">
              {activeDemo === "deployment" && "Masukkan Nama Projek"}
              {activeDemo === "prompt" && "Masukkan Prompt Anda"}
              {activeDemo === "config" && "Pilih Server Type"}
            </h3>

            {activeDemo === "deployment" && (
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Contoh: my-laravel-app"
                  value={deploymentInput}
                  onChange={(e) => setDeploymentInput(e.target.value)}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <button
                  onClick={generateDeploymentScript}
                  disabled={isGenerating || !deploymentInput.trim()}
                  className="w-full px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isGenerating ? "Generating..." : "Generate Deployment Script"}
                </button>
              </div>
            )}

            {activeDemo === "prompt" && (
              <div className="space-y-4">
                <textarea
                  placeholder="Contoh: Write a function to calculate fibonacci"
                  value={promptInput}
                  onChange={(e) => setPromptInput(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                />
                <button
                  onClick={optimizePrompt}
                  disabled={isGenerating || !promptInput.trim()}
                  className="w-full px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isGenerating ? "Optimizing..." : "Optimize Prompt"}
                </button>
              </div>
            )}

            {activeDemo === "config" && (
              <div className="space-y-4">
                <select className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent">
                  <option>Laravel Application</option>
                  <option>Node.js Application</option>
                  <option>WordPress Site</option>
                  <option>Static Website</option>
                </select>
                <button className="w-full px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors">
                  Generate Config
                </button>
                <div className="p-4 bg-muted/30 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    Demo ini akan tersedia tidak lama lagi. Sementara itu, cuba deployment script generator di sebelah!
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Output Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">
              Output
            </h3>

            <div className="bg-muted/30 rounded-lg p-4 min-h-[400px] border">
              {(activeDemo === "deployment" && deploymentOutput) && (
                <pre className="text-sm text-foreground whitespace-pre-wrap font-mono leading-relaxed">
                  {deploymentOutput}
                </pre>
              )}

              {(activeDemo === "prompt" && promptOutput) && (
                <div className="text-sm text-foreground whitespace-pre-wrap leading-relaxed">
                  {promptOutput}
                </div>
              )}

              {(!deploymentOutput && !promptOutput) && (
                <div className="flex items-center justify-center h-full text-muted-foreground">
                  <div className="text-center">
                    <p className="text-muted-foreground">Masukkan input untuk melihat hasil AI generation</p>
                  </div>
                </div>
              )}
            </div>

            {(deploymentOutput || promptOutput) && (
              <div className="flex gap-2">
                <button
                  onClick={() => navigator.clipboard.writeText(activeDemo === "deployment" ? deploymentOutput : promptOutput)}
                  className="px-4 py-2 bg-background border border-border rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors text-sm"
                >
                  Copy
                </button>
                <button
                  onClick={() => {
                    setDeploymentOutput("");
                    setPromptOutput("");
                    setDeploymentInput("");
                    setPromptInput("");
                  }}
                  className="px-4 py-2 bg-background border border-border rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors text-sm"
                >
                  Clear
                </button>
              </div>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-accent/10 to-accent/5 rounded-lg p-8 border border-accent/20">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Suka Dengan Tools Ini?
            </h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Ini baru permulaan! Dalam ebook kami, anda akan dapat akses kepada:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-background/50 rounded-lg border">
                <div className="font-semibold text-lg mb-2">50+ Templates</div>
                <div className="text-sm text-muted-foreground">Siap guna untuk semua use cases</div>
              </div>
              <div className="text-center p-4 bg-background/50 rounded-lg border">
                <div className="font-semibold text-lg mb-2">Advanced AI Tools</div>
                <div className="text-sm text-muted-foreground">Yang tidak available di demo ini</div>
              </div>
              <div className="text-center p-4 bg-background/50 rounded-lg border">
                <div className="font-semibold text-lg mb-2">Step-by-Step Guides</div>
                <div className="text-sm text-muted-foreground">Tutorial lengkap dengan gambar</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/ebooks"
                className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-lg font-semibold text-accent-foreground hover:bg-accent/90 transition-colors"
              >
                Lihat Semua Ebook
              </a>
              <a
                href="/ebooks/ai-powered-deployment-devops-mastery"
                className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-lg font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                Ebook Deployment AI
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}