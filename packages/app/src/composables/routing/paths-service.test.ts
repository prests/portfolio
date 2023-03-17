import { describe, expect, it, vi } from 'vitest';

import { usePaths } from '@composables/routing/paths-service';

describe('Paths Services', () => {
  it('should open resume', () => {
    const windowSpy = vi
      .spyOn(window, 'open')
      .mockImplementationOnce((() => {}) as any);

    const { openResume } = usePaths();
    openResume();

    expect(windowSpy).toHaveBeenCalledWith(
      'Shayne Preston Resume.pdf',
      '_blank'
    );
  });
});
