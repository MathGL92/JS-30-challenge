def number_and_ipaddress(s)
  # if there is a "."
  if s.include?(".")
    # ip to binary num
    binary_num = s.split(".").map { |num| num.to_i.to_s(2).rjust(8, "0") }
    # binary num to number
    binary_num.join.to_i(2).to_s
  else
    # number to binary num
    binary_num = s.to_i.to_s(2).rjust(32, "0")
    # binary num to ip
    binary_num.scan(/.{8}/).map { |num| num.to_i(2) }.join(".")
  end
end
