import { beforeAll } from 'vitest';
import { setProjectAnnotations } from '@storybook/react-vite';
import * as projectAnnotations from './preview';

beforeAll(async () => {
  setProjectAnnotations(projectAnnotations);
});