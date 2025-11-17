import { useEffect } from 'react';
import { useContent } from '@/hooks/useContent';

const TrackingScripts = () => {
  const { content } = useContent();

  useEffect(() => {
    // Facebook Pixel
    if (content['settings.facebookPixel']) {
      const fbPixelCode = content['settings.facebookPixel'];
      const script = document.createElement('script');
      script.innerHTML = fbPixelCode;
      document.head.appendChild(script);
    }

    // TikTok Pixel
    if (content['settings.tiktokPixel']) {
      const ttPixelCode = content['settings.tiktokPixel'];
      const script = document.createElement('script');
      script.innerHTML = ttPixelCode;
      document.head.appendChild(script);
    }

    // Google Ads
    if (content['settings.googleAds']) {
      const gAdsCode = content['settings.googleAds'];
      const script = document.createElement('script');
      script.innerHTML = gAdsCode;
      document.head.appendChild(script);
    }

    // Google Analytics
    if (content['settings.googleAnalytics']) {
      const gaCode = content['settings.googleAnalytics'];
      const script = document.createElement('script');
      script.innerHTML = gaCode;
      document.head.appendChild(script);
    }

    // Custom Scripts
    if (content['settings.customScripts']) {
      const customCode = content['settings.customScripts'];
      const script = document.createElement('script');
      script.innerHTML = customCode;
      document.head.appendChild(script);
    }
  }, [content]);

  return null;
};

export default TrackingScripts;
