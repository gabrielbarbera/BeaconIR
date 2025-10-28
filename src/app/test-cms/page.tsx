'use client';

import { useEffect, useState } from 'react';

interface CMSTestResult {
  endpoint: string;
  status: 'loading' | 'success' | 'error';
  data?: any;
  error?: string;
}

export default function TestCMSPage() {
  const [results, setResults] = useState<CMSTestResult[]>([]);
  const [cmsUrl, setCmsUrl] = useState('');

  useEffect(() => {
    // Get CMS URL from environment
    const url = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'https://orderly-rhythm-491ff3f123.strapiapp.com';
    setCmsUrl(url);
    
    // Test endpoints
    const endpoints = [
      '/hero',
      '/about',
      '/ir-news-items',
      '/leadership',
      '/testimonials',
      '/faqs',
    ];

    const testEndpoints = async () => {
      const results: CMSTestResult[] = [];
      
      for (const endpoint of endpoints) {
        try {
          results.push({ endpoint, status: 'loading' });
          setResults([...results]);
          
          const response = await fetch(`${url}/api${endpoint}`, {
            headers: {
              'Content-Type': 'application/json',
            },
            cache: 'no-store',
          });

          if (response.ok) {
            const data = await response.json();
            results[results.length - 1] = {
              endpoint,
              status: 'success',
              data: data,
            };
          } else {
            results[results.length - 1] = {
              endpoint,
              status: 'error',
              error: `${response.status}: ${response.statusText}`,
            };
          }
          
          setResults([...results]);
        } catch (error) {
          results[results.length - 1] = {
            endpoint,
            status: 'error',
            error: error instanceof Error ? error.message : 'Unknown error',
          };
          setResults([...results]);
        }
      }
    };

    testEndpoints();
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success':
        return 'text-green-400';
      case 'error':
        return 'text-red-400';
      case 'loading':
        return 'text-yellow-400';
      default:
        return 'text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success':
        return '✅';
      case 'error':
        return '❌';
      case 'loading':
        return '⏳';
      default:
        return '⚪';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-deep-navy via-deep-navy to-charcoal text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">CMS Connection Test</h1>
          <p className="text-lg text-gray-300">Testing connection to Strapi CMS</p>
          <div className="mt-4 p-4 bg-charcoal rounded-lg">
            <p className="text-sm">
              <strong>CMS URL:</strong> {cmsUrl}
            </p>
            <p className="text-sm mt-2">
              <strong>API Base:</strong> {cmsUrl}/api
            </p>
          </div>
        </div>

        <div className="grid gap-4">
          {results.map((result, index) => (
            <div
              key={index}
              className="bg-charcoal p-6 rounded-lg border border-gray-700"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold flex items-center gap-3">
                  <span className={getStatusColor(result.status)}>
                    {getStatusIcon(result.status)}
                  </span>
                  <code className="text-gold">/api{result.endpoint}</code>
                </h3>
                <span className={`text-sm font-medium ${getStatusColor(result.status)}`}>
                  {result.status.toUpperCase()}
                </span>
              </div>

              {result.status === 'success' && (
                <div className="mt-4 p-4 bg-deep-navy rounded-lg">
                  <p className="text-sm text-gray-300 mb-2">Response:</p>
                  <pre className="text-xs overflow-x-auto bg-gray-900 p-4 rounded">
                    {JSON.stringify(result.data, null, 2)}
                  </pre>
                </div>
              )}

              {result.error && (
                <div className="mt-4 p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
                  <p className="text-sm text-red-300">
                    <strong>Error:</strong> {result.error}
                  </p>
                  <p className="text-xs text-gray-400 mt-2">
                    This is normal if content types aren't configured yet in Strapi.
                    Create your admin account and add content first.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 p-6 bg-deep-navy rounded-lg border border-gold/20">
          <h3 className="text-xl font-semibold mb-3">Next Steps:</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-300">
            <li>Create admin account at: <code className="text-gold">{cmsUrl}/admin</code></li>
            <li>Configure content type permissions in Strapi</li>
            <li>Add some test content</li>
            <li>Refresh this page to see the data</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

