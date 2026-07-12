import { defineStackbitConfig } from '@stackbit/types'
import { GitContentSource } from '@stackbit/cms-git'

export default defineStackbitConfig({
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ['content'],
      models: [
        {
          name: 'HomePage',
          type: 'page',
          label: 'Home Page',
          urlPath: '/',
          filePath: 'content/site.json',
          fields: [
            {
              name: 'hero',
              type: 'object',
              label: 'Hero Section',
              fields: [
                { name: 'eyebrow',           type: 'string', label: 'Eyebrow Text' },
                { name: 'headline_line1',    type: 'string', label: 'Headline Line 1' },
                { name: 'headline_line2',    type: 'string', label: 'Headline Line 2' },
                { name: 'headline_line3',    type: 'string', label: 'Headline Line 3' },
                { name: 'tagline',           type: 'string', label: 'Tagline' },
                { name: 'stat_rating',       type: 'string', label: 'Rating' },
                { name: 'stat_locations',    type: 'string', label: 'Locations Count' },
                { name: 'stat_items',        type: 'string', label: 'Menu Items Count' },
              ],
            },
            {
              name: 'season',
              type: 'object',
              label: 'Featured Drinks Section',
              fields: [
                { name: 'eyebrow',     type: 'string', label: 'Eyebrow' },
                { name: 'title_line1', type: 'string', label: 'Title Line 1' },
                { name: 'title_line2', type: 'string', label: 'Title Line 2' },
                { name: 'subtitle',    type: 'string', label: 'Subtitle' },
              ],
            },
            {
              name: 'cta',
              type: 'object',
              label: 'Final CTA',
              fields: [
                { name: 'eyebrow',     type: 'string', label: 'Eyebrow' },
                { name: 'title_line1', type: 'string', label: 'Title Line 1' },
                { name: 'title_line2', type: 'string', label: 'Title Line 2' },
                { name: 'subtitle',    type: 'string', label: 'Subtitle' },
              ],
            },
            {
              name: 'footer',
              type: 'object',
              label: 'Footer',
              fields: [
                { name: 'tagline',   type: 'string', label: 'Tagline' },
                { name: 'copy',      type: 'string', label: 'Brand Copy' },
                { name: 'phone',     type: 'string', label: 'Phone Number' },
                { name: 'email',     type: 'string', label: 'Email' },
                { name: 'instagram', type: 'string', label: 'Instagram URL' },
                { name: 'uber_eats', type: 'string', label: 'Uber Eats URL' },
                { name: 'doordash',  type: 'string', label: 'DoorDash URL' },
              ],
            },
          ],
        },
        {
          name: 'MenuConfig',
          type: 'data',
          label: 'Menu Items & Prices',
          filePath: 'content/menu.json',
          fields: [
            {
              name: 'featured',
              type: 'list',
              label: 'Featured Drinks',
              items: {
                type: 'object',
                fields: [
                  { name: 'name',   type: 'string', label: 'Name' },
                  { name: 'desc',   type: 'string', label: 'Description' },
                  { name: 'price',  type: 'string', label: 'Price' },
                  { name: 'badge',  type: 'string', label: 'Badge' },
                ],
              },
            },
            {
              name: 'categories',
              type: 'list',
              label: 'Menu Categories',
              items: {
                type: 'object',
                fields: [
                  { name: 'label', type: 'string', label: 'Tab Label' },
                  {
                    name: 'items',
                    type: 'list',
                    label: 'Items',
                    items: {
                      type: 'object',
                      fields: [
                        { name: 'name',  type: 'string', label: 'Item Name' },
                        { name: 'desc',  type: 'string', label: 'Description' },
                        { name: 'price', type: 'string', label: 'Price' },
                        { name: 'badge', type: 'string', label: 'Badge' },
                      ],
                    },
                  },
                ],
              },
            },
          ],
        },
        {
          name: 'LocationsConfig',
          type: 'data',
          label: 'Locations & Hours',
          filePath: 'content/locations.json',
          fields: [
            {
              name: 'locations',
              type: 'list',
              label: 'Locations',
              items: {
                type: 'object',
                fields: [
                  { name: 'city',          type: 'string', label: 'City' },
                  { name: 'address_line1', type: 'string', label: 'Address Line 1' },
                  { name: 'address_line2', type: 'string', label: 'Address Line 2' },
                  { name: 'note',          type: 'string', label: 'Note' },
                  { name: 'phone',         type: 'string', label: 'Phone' },
                  {
                    name: 'hours',
                    type: 'list',
                    label: 'Hours',
                    items: {
                      type: 'object',
                      fields: [
                        { name: 'days', type: 'string', label: 'Days' },
                        { name: 'time', type: 'string', label: 'Time' },
                      ],
                    },
                  },
                  { name: 'uber_eats_url', type: 'string', label: 'Uber Eats URL' },
                  { name: 'doordash_url',  type: 'string', label: 'DoorDash URL' },
                  { name: 'maps_url',      type: 'string', label: 'Google Maps URL' },
                ],
              },
            },
          ],
        },
        {
          name: 'CombosConfig',
          type: 'data',
          label: 'KÜL Combos',
          filePath: 'content/combos.json',
          fields: [
            {
              name: 'combos',
              type: 'list',
              label: 'Combos',
              items: {
                type: 'object',
                fields: [
                  { name: 'num',   type: 'string', label: 'Number' },
                  { name: 'name',  type: 'string', label: 'Name' },
                  { name: 'desc',  type: 'string', label: 'Description' },
                  { name: 'price', type: 'string', label: 'Price' },
                  { name: 'save',  type: 'string', label: 'Save Text' },
                ],
              },
            },
          ],
        },
      ],
    }),
  ],

  siteMap: () => [
    {
      stableId: 'home',
      label: 'Home',
      urlPath: '/',
      isHomePage: true,
    },
  ],
})
