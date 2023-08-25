import mergeJsonSchema from 'json-schema-merge-allof';

export function getTagColor(method) {
  switch (method.toUpperCase()) {
    case 'GET':
      return 'bg-green-100 text-green-800 dark:bg-gray-700 dark:text-green-400 border border-green-400';
    case 'POST':
      return 'bg-blue-100 text-blue-800 dark:bg-gray-700 dark:text-blue-400 border border-blue-400';
    case 'PUT':
      return 'bg-indigo-100 text-indigo-800 dark:bg-gray-700 dark:text-indigo-400 border border-indigo-400';
    case 'PATCH':
      return 'bg-yellow-100 text-yellow-800 dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300';
    case 'DELETE':
      return 'bg-red-100 text-red-800 dark:bg-gray-700 dark:text-red-400 border border-red-400';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-400 border border-gray-500';
  }
}

export function getSchemaValsFromPath(ref) {
    const [type, path, name] = ref.replace('#/', '').split('/');

    return {type, path, name};
}
