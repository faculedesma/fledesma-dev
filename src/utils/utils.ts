function loadAsset(url: string): Promise<void> {
  if (
    url.endsWith('.ttf') ||
    url.endsWith('.otf') ||
    url.endsWith('.woff') ||
    url.endsWith('.woff2')
  ) {
    const fontFace = new FontFace(
      'custom-font',
      `url(${url})`
    );
    (document as any).fonts.add(fontFace);
    return fontFace.load().then(() => {});
  } else {
    return new Promise<void>((resolve, reject) => {
      const asset = new Image();
      asset.onload = () => resolve();
      asset.onerror = reject;
      asset.src = url;
    });
  }
}

export async function loadInitialAssets(): Promise<void> {
  const assetPromises: Promise<void>[] = [];

  // Add each asset's promise to the array
  assetPromises.push(loadAsset('../assets/images/eye.png'));
  assetPromises.push(
    loadAsset('../assets/images/triangle.png')
  );
  assetPromises.push(
    loadAsset('../assets/images/triangle-psych.png')
  );
  assetPromises.push(
    loadAsset('../assets/images/triangle-bg.png')
  );
  assetPromises.push(
    loadAsset('../assets/images/shapes-triangle.png')
  );
  assetPromises.push(
    loadAsset('../assets/images/shapes-bg.png')
  );
  assetPromises.push(
    loadAsset('../assets/fonts/Gilroy-SemiBold.ttf')
  );
  assetPromises.push(
    loadAsset('../assets/fonts/GraphikLight.otf')
  );
  assetPromises.push(
    loadAsset('../assets/fonts/GraphikSemibold.otf')
  );

  // Wait for all promises to resolve
  await Promise.all(assetPromises);
}
