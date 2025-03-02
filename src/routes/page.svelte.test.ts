import { describe, test, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/svelte';
import Page from './+page.svelte';

describe('/+page.svelte', () => {
	test('should render bingo grid', () => {
		render(Page);
		const bingoCells = screen.getAllByRole('gridcell');
		expect(bingoCells).toHaveLength(25);
	});

	test('should center the bingo grid', () => {
		render(Page);
		const bingoContainer = screen.getByRole('main');
		expect(bingoContainer).toHaveStyle({
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			height: '100vh'
		});
	});
});
