'use client';

import React, { useState, useRef } from 'react';
import { PaintBucket } from 'lucide-react';

import useClickOutside from '@components/hooks/useClickOutside';
import { useMouseFollow } from '@components/hooks/useMouseFollow';

import './palette.scss';
import Button from '@components/buttons/Button';

interface SlideInputProps {
  min?: number;
  max?: number;
  step?: number;
  onChange?: (value: number) => void;
}

const Palette: React.FC<SlideInputProps> = ({ min = 0, max = 360, step = 1, onChange }) => {
  const [brandHue, setBrandHue] = useState(0);
  const [brandSaturation, setBrandSaturation] = useState(0);
  const [neutralHue, setNeutralHue] = useState(0);
  const [neutralSaturation, setNeutralSaturation] = useState(0);

  const paletteRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const brandHueRef = useRef<HTMLInputElement>(null);
  const brandSaturationRef = useRef<HTMLInputElement>(null);
  const neutralHueRef = useRef<HTMLInputElement>(null);
  const neutralSaturationRef = useRef<HTMLInputElement>(null);

  const handleChangeBrandHue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const hueValue = Number(event.target.value);
    const body = document.body;
    body.style.setProperty('--color-brand-hue', `${hueValue}deg`);
    setBrandHue(hueValue);
    if (onChange) {
      onChange(hueValue);
    }
  };

  const handleChangeBrandSaturation = (event: React.ChangeEvent<HTMLInputElement>) => {
    const saturationValue = Number(event.target.value);
    const body = document.body;
    body.style.setProperty('--color-brand-saturation', `${saturationValue}%`);
    setBrandSaturation(saturationValue);
    if (onChange) {
      onChange(saturationValue);
    }
  };

  const handleChangeNeutralHue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const hueValue = Number(event.target.value);
    const body = document.body;
    body.style.setProperty('--color-neutral-hue', `${hueValue}deg`);
    setNeutralHue(hueValue);
    if (onChange) {
      onChange(hueValue);
    }
  };

  const handleChangeNeutralSaturation = (event: React.ChangeEvent<HTMLInputElement>) => {
    const saturationValue = Number(event.target.value);
    const body = document.body;
    body.style.setProperty('--color-neutral-saturation', `${saturationValue}%`);
    setNeutralSaturation(saturationValue);
    if (onChange) {
      onChange(saturationValue);
    }
  };

  const resetToDefault = () => {
    const body = document.body;
    body.style.setProperty('--color-brand-hue', '0deg');
    body.style.setProperty('--color-brand-saturation', '0%');
    body.style.setProperty('--color-neutral-hue', '0deg');
    body.style.setProperty('--color-neutral-saturation', '0%');
    setBrandHue(0);
    setBrandSaturation(0);
    setNeutralHue(0);
    setNeutralSaturation(0);
  };

  const showPalette = () => {
    paletteRef.current?.classList.remove('hide-palette');
    paletteRef.current?.classList.add('show-palette');
  };

  const hidePalette = () => {
    paletteRef.current?.classList.remove('show-palette');
    paletteRef.current?.classList.add('hide-palette');
  };

  useClickOutside(paletteRef, hidePalette, toggleRef);
  useMouseFollow(toggleRef, 'rainbow', false);
  useMouseFollow(brandHueRef);
  useMouseFollow(brandSaturationRef);
  useMouseFollow(neutralHueRef);
  useMouseFollow(neutralSaturationRef);

  return (
    <div className="theme">
      <button ref={toggleRef} onClick={showPalette} className="theme-bucket">
        <PaintBucket />
      </button>
      <div className="theme-palette" ref={paletteRef}>
        <div className="theme-palette-brand">
          <label>Brand HUE</label>
          <input
            ref={brandHueRef}
            type="range"
            min={min}
            max={max}
            step={step}
            value={brandHue}
            onChange={handleChangeBrandHue}
          />
        </div>
        <div className="theme-palette-neutral">
          <label>Brand Saturation</label>
          <input
            ref={brandSaturationRef}
            type="range"
            min={min}
            max={100}
            step={step}
            value={brandSaturation}
            onChange={handleChangeBrandSaturation}
          />
        </div>
        <div className="theme-palette-brand">
          <label>Neutral HUE</label>
          <input
            ref={neutralHueRef}
            type="range"
            min={min}
            max={max}
            step={step}
            value={neutralHue}
            onChange={handleChangeNeutralHue}
          />
        </div>
        <div className="theme-palette-neutral">
          <label>Neutral Saturation</label>
          <input
            ref={neutralSaturationRef}
            type="range"
            min={min}
            max={100}
            step={step}
            value={neutralSaturation}
            onChange={handleChangeNeutralSaturation}
          />
        </div>
        <Button variant="secondary" onClick={resetToDefault}>
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Palette;
