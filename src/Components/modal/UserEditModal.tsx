
interface Props {
  data?: any;
  onClose?: () => void;
}

export default function UserEditModal({ data, onClose }: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <h3 className="text-lg font-semibold mb-2">Edit Donor</h3>
        {data ? (
          <div>
            <p className="mb-1"><strong>Name:</strong> {data.donor_name}</p>
            <p className="mb-1"><strong>Email:</strong> {data.email}</p>
            <p className="mb-1"><strong>Blood Group:</strong> {data.blood_group}</p>
          </div>
        ) : (
          <p>No data</p>
        )}

        <div className="mt-4 flex justify-end">
          <button className="px-4 py-2 bg-gray-200 rounded mr-2" onClick={onClose}>Cancel</button>
          <button className="px-4 py-2 bg-primary text-white rounded">Save</button>
        </div>
      </div>
    </div>
  )
}
