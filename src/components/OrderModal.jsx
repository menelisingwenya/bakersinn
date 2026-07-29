import { useState, useEffect } from 'react'
import styled from 'styled-components'

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  display: ${props => props.$open ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  z-index: 1200;
`

const OverlayBg = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(12,12,12,0.6);
`

const ModalPanel = styled.div`
  position: relative;
  width: min(920px, 94%);
  background: #ffffff;
  color: #2d237d;
  border-radius: 8px;
  padding: 28px;
  box-shadow: 0 24px 48px rgba(10,10,30,0.3);
  z-index: 2;
`

export default function OrderModal() {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', product: '', quantity: '1', notes: '' })

  useEffect(() => {
    function handleTrigger(e) {
      if (e.target.closest('.js-order')) {
        e.preventDefault()
        setOpen(true)
      }
    }
    document.addEventListener('click', handleTrigger)
    return () => document.removeEventListener('click', handleTrigger)
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    const to = 'menelisingwenya7@gmail.com'
    const subject = encodeURIComponent(`Order from website: ${formData.product || 'Item'}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nProduct: ${formData.product}\nQuantity: ${formData.quantity}\nNotes: ${formData.notes}`
    )
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`
    setOpen(false)
  }

  return (
    <ModalOverlay $open={open}>
      <OverlayBg onClick={() => setOpen(false)} />
      <ModalPanel role="dialog" aria-modal="true" aria-labelledby="order-modal-title">
        <button
          onClick={() => setOpen(false)}
          className="absolute top-[12px] right-[12px] border-none bg-transparent text-[28px] cursor-pointer"
          aria-label="Close order form"
        >
          &times;
        </button>
        <h2 id="order-modal-title" className="text-[#2d237d] text-[28px] font-heading font-bold mb-[18px]">Place an Order</h2>
        <form onSubmit={handleSubmit} className="space-y-[16px]">
          {[
            { label: 'Name', name: 'name', type: 'text', required: true, placeholder: 'Your name' },
            { label: 'Email', name: 'email', type: 'email', required: true, placeholder: 'you@example.com' },
            { label: 'Product', name: 'product', type: 'text', placeholder: 'Product name or code' },
            { label: 'Quantity', name: 'quantity', type: 'number', value: '1' },
          ].map(field => (
            <label key={field.name} className="block text-[#2d237d] font-bold">
              {field.label}
              <div>
                <input
                  name={field.name}
                  type={field.type}
                  required={field.required}
                  defaultValue={field.value}
                  placeholder={field.placeholder}
                  onChange={e => setFormData(prev => ({ ...prev, [field.name]: e.target.value }))}
                  className="w-full px-[12px] py-[10px] border border-[#dcd6c8] rounded-[4px] text-[16px] mt-[4px]"
                />
              </div>
            </label>
          ))}
          <label className="block text-[#2d237d] font-bold">
            Notes
            <div>
              <textarea
                name="notes"
                rows="4"
                placeholder="Any special instructions"
                onChange={e => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                className="w-full px-[12px] py-[10px] border border-[#dcd6c8] rounded-[4px] text-[16px] mt-[4px] resize-vertical"
              />
            </div>
          </label>
          <div className="text-center mt-[16px]">
            <button type="submit" className="px-[22px] py-[12px] bg-gold text-white border-none rounded-[4px] font-bold cursor-pointer hover:bg-[#a8843a] transition-colors">
              Send Order
            </button>
          </div>
        </form>
      </ModalPanel>
    </ModalOverlay>
  )
}