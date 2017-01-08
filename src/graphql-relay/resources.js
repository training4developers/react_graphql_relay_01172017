import fetch from 'node-fetch';

export const getAllResources = (baseUrl, resourceName, queryString) =>
	fetch(`${baseUrl}/${resourceName}${queryString ? '?' + queryString : ''}`)
		.then(res => res.json());

export const getResource = (baseUrl, resourceName, resourceId) =>
	fetch(`${baseUrl}/${resourceName}/${resourceId}`)
		.then(res => res.json());

export const insertResource = (baseUrl, resourceName, resource) =>
	fetch(`${baseUrl}/${resourceName}`, {
		method: 'post',
		headers: { 'content-type': 'application/json'},
		body: JSON.stringify(resource)
	}).then(res => res.json());

export const updateResource = (baseUrl, resourceName, resource) =>
	fetch(`${baseUrl}/${resourceName}/${resource.id}`, {
		method: 'put',
		headers: { 'content-type': 'application/json'},
		body: JSON.stringify(resource)
	}).then(res => res.json());

export const deleteResource = (baseUrl, resourceName, resource) =>
	fetch(`${baseUrl}/${resourceName}/${resource.id}`, {
		method: 'delete'
	}).then(res => res.json());