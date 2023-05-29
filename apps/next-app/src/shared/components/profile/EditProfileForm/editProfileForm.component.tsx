import { Button } from '@mantine/core';
import { SubmitHandler, useForm } from 'react-hook-form';

interface EditProfileFormValues {
  fullName: string;
  avatar: File;
}

interface EditProfileFormProps {
  fullName?: string;
}

export const EditProfileForm = ({ fullName }: EditProfileFormProps) => {
  const { register, handleSubmit } = useForm<EditProfileFormValues>({
    defaultValues: { fullName },
  });

  const handleUpdateProfile: SubmitHandler<EditProfileFormValues> = async (
    formData
  ) => {
    //TODO: Add logic
  };

  return (
    <form
      className="mb-8 flex flex-col gap-4"
      onSubmit={handleSubmit(handleUpdateProfile)}
    >
      <div>
        <label
          htmlFor="first_name"
          className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
        >
          First name
        </label>
        <input
          type="text"
          {...register('fullName')}
          id="first_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <Button>Update Profile</Button>
    </form>
  );
};
